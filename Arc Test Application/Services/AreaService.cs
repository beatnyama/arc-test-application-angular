using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using static Arc_Test_Application.Models.Enums;

namespace Arc_Test_Application.Services
{
    public interface IAreaService
    {
        public double GetArea(CompositeShape shape);
    }
    public class AreaService : IAreaService
    {
        public double GetArea(CompositeShape shape)
        {
            ShapeTypes shapeName;
            double area = -1; 
            if (Enum.TryParse<ShapeTypes>(shape.ShapeName, out shapeName))
            {
                switch (shapeName)
                {
                    case ShapeTypes.Circle:
                        if (shape.Circle.Radius > 0)
                        {
                            return Math.PI * shape.Circle.Radius * shape.Circle.Radius;
                        }
                        break;
                    case ShapeTypes.Square:
                        if (shape.Square.Side > 0)
                        {
                            return shape.Square.Side * shape.Square.Side;
                        }
                        break;

                    case ShapeTypes.Rectangle:
                        if (shape.Rectangle.LengthOfSide > 0 && shape.Rectangle.Width > 0 )
                        {
                            return shape.Rectangle.LengthOfSide * shape.Rectangle.Width;
                        }
                        break;

                    case ShapeTypes.Triangle:
                        if (shape.Triangle.Base > 0 && shape.Triangle.Height > 0 )
                        {
                            return 0.5 * shape.Triangle.Base * shape.Triangle.Height;
                        }
                        break;                    
                }
            }
            return area; 

        }

    }
}
