function main() {
    var canvas = document.getElementById("myCanvas");
    var gl = canvas.getContext("webgl");

    // define vertex and color
    var left = [];
    left = leftGlass();

    var right = [];
    right = rightGlass();

    var vertices = [...left, ...right];

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
            vColor = aColorl;
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
    gl.shaderSource(vertexShader, vertexShaderSource);
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderSource);

    // compile shader
    gl.compileShader(vertexShader);
    gl.compileShader(fragmentShader);
    
    // error message
    if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(fragmentShader));
    }

    // membuat program
    var shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);

    // jadikan satu package
    gl.linkProgram(shaderProgram);

    // error message
    if(!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
        var info = gl.getProgramInfoLog(shaderProgram);
        throw `Could not compile WebGL program. \n\n ${info}`
    }

    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    var aPosition = gl.getAttribLocation(shaderProgram, `aPosition`);
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 5*Float32Array.BYTES_PER_ELEMENT, 0);
    gl.enableVertexAttribArray(aPosition);

    var aColor = gl.getAttribLocation(shaderProgram, `aColor`);
    gl.vertexAttribPointer(aColor, 3, gl.FLOAT, false, 5*Float32Array.BYTES_PER_ELEMENT, 2*Float32Array.BYTES_PER_ELEMENT);
    gl.enableVertexAttribArray(aColor);

    let change = 0;
    let speed = 0.0094;

    function drawScene() {
        if(change >= 0.4 || change <= -0.4) speed = -speed;
        change += speed;

        gl.useProgram(shaderProgram);

        const leftObject = [
            1.0, 0.0, 0.0, 0.0,
            0.0, 1.0, 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            0.0, 0.0, 0.0, 1.0,
        ]
        
        const rightObject = [
            1.0, 0.0, 0.0, 0.0,
            0.0, 1.0, 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            0.0, change, 0.0, 1.0,
        ]

        gl.clearColor(0.0, 0.0, 0.0, 1);
        gl.clear(gl.COLOR_BUFFER_BIT);

        const u_matrix = gl.getUniformLocation(shaderProgram, 'u_matrix');
        gl.uniformMatrix4fv(u_matrix, false, objekKiri);
    
        gl.drawArrays(gl.TRIANGLES, 0, (kiri.length/5));
        
        gl.uniformMatrix4fv(u_matrix, false, objekKanan);
        gl.drawArrays(gl.TRIANGLES, (kiri.length/5), (kanan.length/5));
        requestAnimationFrame(drawScene);
    }
    drawScene();
}