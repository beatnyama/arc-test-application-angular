using System;

namespace Arc_Test_Application
{
    public class CompositeShape
    {
        public string ShapeName { get; set; }
        public string Area { get; set; }
        public Circle Circle { get; set; }
        public Rectangle Rectangle{ get; set; }
        public Square Square{ get; set; }
        public Triangle Triangle { get; set; }
    }

    public class Circle: CompositeShape
    {
        public double Radius { get; set; }
    }
    public class Square: CompositeShape
    {
        public double Side { get; set; }
    }
    public class Rectangle: CompositeShape
    {
        public double LengthOfSide { get; set; }
        public double Width { get; set; }
    }
    public class Triangle: CompositeShape
    {
        public double Base { get; set; }
        public double Height { get; set; }
    }

}
