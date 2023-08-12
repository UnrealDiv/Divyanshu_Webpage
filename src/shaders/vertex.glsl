
// uniform float uBigWavesElevation;
// uniform float uBigWavesSpeedX;
// uniform float uBigWavesSpeedZ;
// uniform vec2 uBigWavesFrequency;
// uniform float uTime;

// varying float vElevation;


uniform float uTime;

varying float vElevx;
varying float vElevy;

void main(){

    vec4 modelPosition = modelMatrix*vec4(position,1.0);
    

    modelPosition.x += sin(modelPosition.y*5.0+uTime*10.0)/10.0;
modelPosition.y += cos(modelPosition.x*5.0+uTime*10.0)/10.0;

vElevx = (modelPosition.x-0.5)*2.0;
vElevy = (modelPosition.y-0.5)*2.0;
    vec4 viewPosition = viewMatrix*modelPosition  ;
    vec4 projectedPosition = projectionMatrix*viewPosition; 
    gl_Position = projectedPosition;

}