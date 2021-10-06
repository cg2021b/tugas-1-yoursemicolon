function sin(a) {
    return Math.sin(Math.PI * a);
}

function cos(b) {
    return Math.cos(Math.PI * b);
}

function leftPart() {
    var left = [];
    var A, B, C, D, E;

    // atas luas
    for(var i = 0; i <= 180; i += 1) {
        var j = (i + 270) * Math.PI / 180;
        var k = (i + 1 + 270) * Math.PI / 180;

        var vertex1 = [
            Math.sin(j) * 0.175 - 0.5, // posisi x
            Math.cos(j) * 0.05 + 0.5, // posisi y
            0.701, 0.922, 0.541 // warna
        ];

        var vertex2 = [
            -0.5, 0.4, // posisi x dan y
            0.701, 0.922, 0.541 // warna
        ]
    }
}