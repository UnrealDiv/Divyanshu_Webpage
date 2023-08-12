// uniform vec3 uDepthColor;
// uniform vec3 uSurfaceColor;


varying float vElevx;
varying float vElevy;
// uniform float uColorOffset;
// uniform float uColorMultiplier;
uniform float uTime;

void main(){
    // vec3 color = mix(uDepthColor,uSurfaceColor,mixStrength);


    gl_FragColor = vec4(0, sin(vElevy*5.0+uTime*5.0)+1.0, sin(vElevy*3.0+uTime)+1.0, 1.0);

}