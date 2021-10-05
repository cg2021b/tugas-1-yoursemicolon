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
        
        `;

    var vertexShaderCode = `
    void main() {
        gl_position = vec4()
    }`
}