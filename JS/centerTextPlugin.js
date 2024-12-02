// Define the plugin
const centerTextPlugin = {
    id: 'centerText',
    beforeDraw(chart) {
        const { width, height } = chart;
        const ctx = chart.ctx;
        const text = `${chart.data.datasets[0].data[0]}%`; // Adjust based on your data
        ctx.save();

        const legendHeight = chart.legend ? chart.legend.height : 0;

        ctx.font = 'bold 24px Roboto';
        ctx.fillStyle = '#333'; // Text color
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(text, width / 2, (height - legendHeight) / 2); // Center the text

        ctx.restore();
    }
};

// Export the plugin for use in other files
export default centerTextPlugin;