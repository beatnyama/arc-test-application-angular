export interface CompositeShape {
    shapeName: string;
    area: string;
    circle: Circle;
    square: Square;
    rectangle: Rectangle;
    triangle: Triangle;
}

export interface Circle extends CompositeShape {
    radius: number;
}
export interface Square extends CompositeShape {
    side: number;
}
export interface Rectangle extends CompositeShape {
    width: number;
    lengthOfSide: number;
}
export interface Triangle extends CompositeShape {
    base: number;
    height: number;
}