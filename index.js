// TODO: perceived random number generator (fits human idea of randomness, fewer repetitions and runs, etc)

const width = 800;
const height = 800;

let svg = d3.select('#app').append('svg');

svg.attr('width', width)
  .attr('height', height);

// let's make one horizontal path
  // that randomly zigs and zags within a height

// generate data points

const zig = ({ yOffset, xOffset, height, width, numOfPoints, index }) => {
  let points = d3.range(numOfPoints)
                .map(i => [Math.floor(width * Math.random() + xOffset), Math.floor(height * Math.random()) + (index * yOffset)])
                .sort((a, b) => a[0] - b[0]);

  let line = d3.line()(points);

  svg.append('path')
    .attr('d', line)
    .attr('fill', 'none')
    .attr('stroke', 'black')
}


for (let i = 0; i < 20; i++) {

  zig({ 
    yOffset: 20,
    xOffset: 100,
    height: 10,
    width: width - 200,
    numOfPoints: (width - 200) / 5,
    index: i
  });
}
