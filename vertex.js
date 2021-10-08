function sin(a) {
    return Math.sin(Math.PI * a);
}

function cos(b) {
    return Math.cos(Math.PI * b);
}

function leftPart() {
    var left = [];
    var A, B, C, D, E;

    // top outside
    for(var i = 0; i <= 180; i += 1) {
        var j = (i + 270) * Math.PI / 180;
        var k = (i + 1 + 270) * Math.PI / 180;

        var vertex1 = [
            Math.sin(j) * 0.175 - 0.5, // x
            Math.cos(j) * 0.05 + 0.5, // y
            0.16, 0.62, 0.96 // color
        ];

        var vertex2 = [
            -0.5, 0.4, //  x dan y
            0.16, 0.62, 0.96 // color
        ];

        var vertex3 = [

        ]
    }
}