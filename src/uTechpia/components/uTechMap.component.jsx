import React, { useRef, useEffect, useState } from 'react';
import { select } from 'd3';
import dataJson from '../../utils/data';
import { getDirectRuleOfThree } from '../../utils/usefulFunctions';

const UtechMap = () => {
  const svgRef = useRef();
  const [data, setData] = useState(dataJson);
  const [screenSize, setScreenSize] = useState({
    width: 1920,
    height: 1080,
  });

  useEffect(() => {
    const screenHeight = window.innerHeight;
    const screenWidth = window.innerWidth;
    setScreenSize({
      width: screenHeight,
      height: screenWidth,
    });

    const responsiveData = data.map(dot => {
      return {
        ...dot,
        radius: getDirectRuleOfThree(1920, screenWidth, dot.radius),
        position: {
          x: getDirectRuleOfThree(1920, screenWidth, dot.position.x),
          y: getDirectRuleOfThree(1080, screenHeight, dot.position.y),
        },
      };
    });
    setData(responsiveData);
  }, []);

  useEffect(() => {
    const svg = select(svgRef.current);
    svg
      .selectAll('circle')
      .data(data)
      .join(
        enter => enter.append('circle'),
        // .attr(
        //   'style',
        //   `width: ${screenSize.width}px; height:  ${screenSize.height}px; background-color: #282c34`
        // ),
        update => update.attr('class', 'updated'),
        exit => exit.remove()
      )
      .attr('r', element => element.radius)
      .attr('cx', element => element.position.x + element.radius)
      .attr('cy', element => element.position.y + element.radius)
      .attr('stroke', 'white')
      .attr('stroke-width', '24px');
  }, [data]);
  return <svg ref={svgRef} className="map__svg" />;
};

export default UtechMap;
