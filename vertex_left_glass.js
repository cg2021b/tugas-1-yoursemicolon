function leftGlass() {
    var left_glass = [];

    // top outside
    for (var i = 0; i <= 180; i += 1) {
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
            0.16, 0.62, 0.96 // color
        ];

        left_glass = left_glass.concat(vertex1, vertex2, vertex3);
    }

    // bottom half circle
    for (var i = 90; i <= 270; i += 1) {

        var j = i * Math.PI / 100;
        var k = (i + 1) * Math.PI / 100;

        var vertex1 = [
            Math.sin(j) * 0.125 - 0.5, // x
            Math.cos(j) * 0.1 - 0.5, // y
            0.16, 0.62, 0.96 // color
        ];

        var vertex2 = [
            -0.5, -0.5, // x, y
            0.16, 0.62, 0.96 // color
        ];

        var vertex3 = [
            Math.sin(k) * 0.125 - 0.5, // x
            Math.cos(k) * 0.1 - 0.5, // y 
            0.16, 0.62, 0.96 // color
        ];

        left_glass = left_glass.concat(vertex1, vertex2, vertex3);
    }

    var A = left_glass.slice(180 * 5 * 3, 180 * 5 * 3 + 5);
    var B = left_glass.slice(181 * 5 * 3, 181 * 5 * 3 + 5);
    var C = left_glass.slice(5, 10);
    var D = left_glass.slice(361 * 5 * 3, 361 * 5 * 3 + 5);
    var E = left_glass.slice(0 * 5 * 3, 0 * 5 * 3 + 5);

    // concat
    left_glass = left_glass.concat(A, B, C);
    left_glass = left_glass.concat(B, C, D);
    left_glass = left_glass.concat(C, D, E);

    // inner top glass
    for (var i = 0; i <= 180; i += 1) {

        var j = (i + 270) / 180;
        var k = (i + 271) / 180;

        var vertex1 = [
            Math.sin(j) * 0.175 - 0.5, // x
            Math.cos(j) * 0.05 + 0.5, // y
            0.78, 0.78, 0.78 // color
        ];

        var vertex2 = [
            -0.5, 0.4, // x, y
            0.78, 0.78, 0.78 // color
        ];

        var vertex3 = [
            Math.sin(k) * 0.175 - 0.5, // x
            Math.cos(k) * 0.05 + 0.5, // y 
            0.78, 0.78, 0.78 // color
        ];

        left_glass = left_glass.concat(vertex1, vertex2, vertex3);
    }


    for (var i = 90; i <= 360; i += 1) {

        var j = (i + 270) / 180;
        var k = (i + 271) / 180;

        var vertex1 = [
            Math.sin(j) * 0.165 - 0.5, // x
            Math.cos(j) * 0.05 + 0.5, // y
            0.78, 0.78, 0.78 // color
        ];

        var vertex2 = [
            -0.5, 0.4, // x, y
            0.78, 0.78, 0.78 // color
        ];

        var vertex3 = [
            Math.sin(k) * 0.165 - 0.5, // x
            Math.cos(k) * 0.05 + 0.5, // y 
            0.78, 0.78, 0.78 // color
        ];

        left_glass = left_glass.concat(vertex1, vertex2, vertex3);
    }

    // inner bottom glass
    for (var i = 90; i <= 270; i += 1) {

        var j = (i + 180) / 180;
        var k = (i + 1 + 180) / 180;

        var vertex1 = [
            Math.sin(j) * 0.125 - 0.5, // x
            Math.cos(j) * 0.1 - 0.5, // y
            0.16, 0.62, 0.96 // color
        ];

        var vertex2 = [
            -0.5, -0.5, // x, y
            0.16, 0.62, 0.96 // color
        ];

        var vertex3 = [
            Math.sin(k) * 0.125 - 0.5, // x
            Math.cos(k) * 0.1 - 0.5, // y 
            0.16, 0.62, 0.96 // color
        ];

        left_glass = left_glass.concat(vertex1, vertex2, vertex3);
    }

    for (var i = 180; i <= 450; i += 1) {

        var j = (i + 180) / 180;
        var k = (i + 1 + 180) / 180;

        var vertex1 = [
            Math.sin(j) * 0.125 - 0.5, // x
            Math.cos(j) * 0.1 - 0.5, // y
            0.16, 0.62, 0.96 // color
        ];

        var vertex2 = [
            -0.5, -0.5, // x, y
            0.16, 0.62, 0.96 // color
        ];

        var vertex3 = [
            Math.sin(k) * 0.125 - 0.5, // x
            Math.cos(k) * 0.1 - 0.5, // y 
            0.16, 0.62, 0.96 // color
        ];

        left_glass = left_glass.concat(vertex1, vertex2, vertex3);
    }

    return leftGlass;
}