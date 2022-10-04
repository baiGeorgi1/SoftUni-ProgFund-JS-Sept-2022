function cone(num1,num2){
    let radius = num1;
    let height = num2;
    let volume = (Math.PI*Math.pow(radius,2)*height)/3;
    let lateralSurface = Math.PI*radius*(Math.sqrt((Math.pow(radius,2) + Math.pow(height,2) )))
    let baseSurface = Math.PI*Math.pow(radius,2);    
    let area = lateralSurface + baseSurface;
    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${area.toFixed(4)}`);
}
cone (3,5)