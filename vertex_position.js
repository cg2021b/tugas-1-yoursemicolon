function sin(a) {
    return Math.sin(Math.PI * a);
}

function cos(b) {
    return Math.cos(Math.PI * b);
}

function leftPart() {
    var left_glass = [];

    // top outside
    for(var i = 0; i<=180; i += 1)
    {
        var j = (i + 270) * Math.PI / 180;
        var k = (i + 271) * Math.PI / 180;
        
        var vertex1 = [
            Math.sin(j) * 0.175 - 0.5, // x
            Math.cos(j) * 0.05 + 0.5, // y
            0.16, 0.62, 0.96 // color
        ];
    
        var vertex2 = [
            -0.5, 0.4, // x, y
            0.16, 0.62, 0.96 // color
        ];

        var vertex3 = [
            Math.sin(k) * 0.175 - 0.5, // x
            Math.cos(k) * 0.05 + 0.5, // y 
            16, 0.62, 0.96 // color
        ];

        left_glass = left_glass.concat(vertex1, vertex2, vertex3)

        // bottom half circle
        
}