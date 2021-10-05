function main() {
    var canvas = document.getElementById("myCanvas");
    var gl = canvas.getContext("webgl");

    /**
     * Mendefinisikan titik
     * A (-0.5, 0.5)
     * B (0.5, 0.5)
     * C (0.5, -0.5)
     * D (-0.5, -0.5)
     */

    // definisikan titik dan warna
    var vertices = [
        -0.5, 0.5, 1.0, 0.0, 0.0,  //Titik A
        0.5, 0.5, 0.0, 1.0, 0.0,  // Titik B
        0.5, -0.5, 0.0, 1.0, 0.0,  // Titik C
        -0.5, -0.5, 0.0, 0.0, 1.0  // Titik D
    ];

    // buffer sebagai linkedlist
    // tempat penyimpanan vertex sementara sebelum digambar oleh GPU
    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    // definisikan vertex dan fragmen shader
    // attribute merupakan variabel input ke dalam vertex shader
    var vertexShaderSource = `
        attribute vec2 aPosition; // vektor 2 dimensi x, y
        attribute vec3 aColor; // vektor 3 dimensi untuk rgb
        varying vec3 vColor; // output dari vertex shader yang menjadi input di fragment shader
        uniform float uChange; // mengubah posisi x, y disesuaikan dgn berapa banyak nilai uChange berubah
        void main() {
            gl_Position = vec4(aPosition + uChange, 0.0, 1.0);
            vColor = aColor
        }
        `;

    var fragmentShaderSource = `
        precision mediump float;
        varying vec3 vColor;
        void main() {
            gl_FragColor = vec4(vColor, 1.0);
        }
    `;

    // membuat dot di GPU
    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.ShaderSource(vertexShader, vertexShaderSource);
    var fragmentShader = fl.createShader(gl.FRAGMENT_SHADER);
    gl.ShaderSource(fragmentShader, fragmentShaderSource);

    // compile shader
    gl.compileShader(vertexShader);
    gl.compileShader(fragmentShader);

    // membuat program
    var shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);

    // jadikan satu package
    gl.linkProgram(shaderProgram);
    gl.useProgram(shaderProgram);

    // mengumpul perubahan posisi
    var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 5*Float32Array.BYTES_PER_ELEMENT, 0);
    gl.enableVertexAttribArray(aPosition);
    var aColor = gl.getAttribLocation(shaderProgram, "aColor");
    gl.vertexAttribPointer(aColor, 3, gl.FLOAT, 5*Float32Array.BYTES_PER_ELEMENT, 2*Float32Array.BYTES_PER_ELEMENT);
    gl.enableVertexAttribArray(aColor);

    // menggambar
    var change = 0;
    var uChange = gl.getUniformLocation(shaderProgram, "uChange");
    function render() {
        change += 1;
        gl.uniform1f(uChange, change);

        gl.clearColor(1.0, 1.0, 1.0, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);

        gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
        setInterval(render, 1000/60); //60fps
    }
    setInterval(render, 1000/60);
}