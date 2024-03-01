uniform sampler2D uPanoramaTexture;
uniform sampler2D uPanoramaTextureBlurred;
uniform float uMixValue;

varying vec2 vUv;

void main()
{
    vec3 panoramaTextureColor = texture2D(uPanoramaTexture, vUv).rgb;
    vec3 panoramaTextureBlurredColor = texture2D(uPanoramaTextureBlurred, vUv).rgb;

    vec3 mixedColors = mix(panoramaTextureColor, panoramaTextureBlurredColor, uMixValue);

    gl_FragColor = vec4(mixedColors, 1.0);

    // gl_FragColor = vec4(0.0, 1.0, 0.0, 1.0);
}
