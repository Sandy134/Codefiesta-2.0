import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const DomainSubjects = () => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/subjects");
  };

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const [user, setUser] = useState(localStorage.getItem("user"));

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [navigate, user]);

  return (
    <div className="container mt-5">
      <h1 className="fw-bolder d-flex justify-content-center">
        Programming Languages
      </h1>
      <div className="row input-group mt-5 mb-2">
        <div className="d-flex justify-content-end">
          <div className="form-outline">
            <input
              type="search"
              id="form1"
              className="form-control"
              placeholder="Search"
            />
          </div>
          <button type="button" className="btn btn-primary">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
      <div className="row">
        <div onClick={clickHandler} className="col-md-4 mb-5">
          <div className="card text-center" style={{ height: "30rem" }}>
            <div className="icon-box">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png"
                style={{ width: "200px" }}
              />
            </div>
            <div className="mt-5">
              <h4 className="headline2">C Programming Language</h4>
              <p className="p1">
                Get to learn and be interview ready with this course that has no
                pre-requisites and is designed to make you an full stack web
                developer.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-5">
          <div
            onClick={clickHandler}
            className="card text-center"
            style={{ height: "30rem" }}
          >
            <div className="icon-box">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/306px-ISO_C%2B%2B_Logo.svg.png"
                style={{ width: "200px" }}
              />
            </div>
            <div className="mt-5">
              <h4 className="headline2">C++ Programming Language</h4>
              <p className="p1">
                Kick-off your scripting languages journey with the complete
                tutorials covering all the fundamentals and advanced concepts
                with a hands on approach.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-5">
          <div
            onClick={clickHandler}
            className="card text-center"
            style={{ height: "30rem" }}
          >
            <div className="icon-box">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAwFBMVEX///+bT5ZoIXpeAHLZw9jg0+OWQ5BnHnmcUJeZS5RfAHNkFnaVQZBiEXVbAHCYSJPp3uyylbr7+PtnE3qTPI6jha2Ua6HOvdNhCnTz6/Pt5e/38vfDmsDStNDYvtaHPoutjramZaKiXJ2+krvJpcZ4PYjIs87BqsjOrsyye66rbqe3hbNuJ33hzN+CUZCASo6KW5edd6itc6l/Noeifay8o8N8Q4vAlr20gLBvMIDYy9yQY52NRI54MIKYcKSmhbDdXkgSAAAN/ElEQVR4nO1daXuiShONEtk3iTeixFw1bjF7bpyb5b7J//9XL6CoEJaq7mo088z5NDwTgQNVXVWnupuTkz/4gz/IIPAOfQcCEQyutU6nI48mvUPfihB4E03WGhE02bkIDn079Dgdy40dZPXy0DdEDHdpao19aOaodeibIkRw1Unzizl2bn4bd1yozjd+ERxt8lsMrK2x/P0F/kbu2H/OMdCUO7qHvkUueBdmvoHuc/zJ7niZihBFCN3x0DfKCHdU7IBZdzw99M0yoHdT6oBZU13+OHecaFUOmOV49aMSuTuQA6bhNBaHvm0w+s8m3ED3XqOs3h361kEILpj4xRzN6x/gjgMVb6A7OPK/R+6OLXCEKOTYGByaRAl6r4gIUQTNHB+rO3oTGRchijm+9g9NJg+nDBGiCI5zcXR11bcinpejdlx1VXBFy69xbDLHoEHjgFmOx1JX8UeIIoTueGhyIXrXBBGiELJ8aHckixCFMJcHdUdYEc8HTT6cO7pLUQ6YhuMcRuYIMEU8J2TtADLHAlnE80Ezn2uuq1iKeE6Ocp0yB2MRzwlHrkvm8NiLeE7I9dRVl1xFPB/qkDngMq8YOPKV0LoKJfMK4yhO5vAmTp0RohDmSJA78kQIzZFl0zQ7a4T/kmWH3Ro0WYTMwRohIm5OY3mzuLxz+4HnnXhe0HfvLhdXy9DgZI2NpyP/S+yOwb9MDujIzvh10CrKnHutweuY8W06DmldxSTzOqZ6c9mvfNT9yxu1so+aB0J3ZCniNVO+akENyWtdyQw+oJmvJHUVg8yryc4r9vneXTv45+iY/KqjN0FbkGaOFyzPtjcZ418k92wOfBGvmaNL1ufqXeI5alwyRx9dxIfvj69WPVXRtqrJN4x1Ve5crXLIY/4hnGHcdjpMk6sG6CKeaBZXMMEPOTLedO5GJvIiYWVDpYn1l9iLh6aKm83hXaM9nraVMsDnOVoHocgFY3SOYV7Tqii9JT6LMq/Ap39Gh0CHvmab4IOjCW1zLLBe4KgitIU7vKV2YJlUgLUP+VmMsBCMkHeiOmPQiSfI88pw88fiBnMrauNv6wt0WhVnHKZIFfMC7DCq+t+tohiQk/ZwXtgR2+BbdIAEtf8pzWbThoTkO4xlaLLolskA8sDVxj8Rv2ZTgmThpxiGsngRelB5P6r6d3NNkJ5hp46m16DCUCMHbDbFMDTrabJPygx144BiGNbWC7oovKXQAZt7BIkZCoyDWdzkp5HqvoHSM3SehRPbwhvlxei0gZIz1FRkquYF7ulgsZgsBoM7F7uSNPheFG8jhCiGDibZ7p1ePKsdUw7hyFEHo6NeX9xhCua7zGizFyEEMTTh5ZI7WTqmk2lQaJpjassJ/DGlR5tvDkjO0LkG3pg3GBX3JTRZHg2g9rrcnSXHAakZag1YRd+7kCtUpZDkBcxa+8l4GjlgAUE6hrBQH1yAOqoOcN3zujAPHTDfQEkZwmx0AZ51KsPm50chQ3WKDJSUoQawK3eE0Fk0cwRo6rpyboQQwFAGyHYLpI6kQQrpi3/yIgQ9Q21cOfx512hJt2G+Vp02+LLK+VExrB5m+ni9NYQzLjf+uVJJkIahVqlntRhnhWlyyf29T6UKCyVjaFaV9Xfsa9cKKfbPbQA/GobaqIogx7Qwzcl9fN7QqjZQMoZVXshqohuKck6mOmv6oBdIw7BqIO1zzszU5Oxw03qAGSgVwwrlIhjzzuzTRqlH2PvUDTA/EoZO+Yh+zT+1z7nZO1/bADogGUPttfS36K5VHnae3r2FRAhahuWhwqUguLWT1mOOAyrWBpv/Sg4NKoZy6U9z9SIGhpHGFbz4OQ6oTP/a4CGmqHxtDh8NGoZOqYBIYqMRzNOTVb4D7tpnMSXlV3L4YtEwNMtOEDDOFf0GVfuvKEWTZpuLeW/RHxifycWnNJ2ZcgXxgmaK9LoRWDCS+AkDN35nfjt5ugYNw9RAnkWPiGChyhRZZTPRO7pSTOh9c9jSaUaa0uWOJK+woojf+d3Qjw6NRBmYETF0SqQGj2CYURu5Mu8O1lNyufN4oJkmh08WCcPSyrC6kVlNsEDm3WE30MQji/GRXP2eJh46ZQkNdywsdcAN7IRAL7bK7UDTSx4NJ8OyxSou5yssk3n3GCZjeWagcaXkJXMyLPn5hGuc+d4ITEHx15Buk8sNbSmEnYwL8/DQorDSkrpiyWOkFTKv8qu9QeKGJ61ZN0TqcGjxM2wU/4gnGFbKvMY54LbXhsvHUFuW/Ig5VlRGiBoZlmU0zOG+OkLUyLBMwLhmc0NIhKiTYXHO5iFn+234gSJEjQxL6vsAOL8uxS+/E39QhsVNdwb5Qv0PYqA1MyzOu1Gz/WJ+DTC/kOFj342RZDRB5jCKjRTxsFPci0am3WGEADnglqIdo5lQeooPpSQB6cYJDkFO0yku8Beo2cqQCJHHM11JGPfJYVwrrnEUDGERIgeZSsJ6SREmYVj8G3jeDY0QOdDTlYS+rRX3LOLg7xAeIfLeYeJ389gq/WRod3dGenCGjA64hrItnWJtVLlNBr6ZtPujw46lqAiRwnos3Q4002jstLei1HpktX1+hnzxEBsh9gmu42FipF4c/rpbLutg2V/5/Aw5chrWCLFm+APyUuYIUS9D5tqCI0LUzLCkPnwuZggo4o+FIVuNzxUhambIotPwOWDdDPFaG68DJgw/iy9MyxCpl3JFiH3EeukqudJsLZ0mCZY73GipnwY/Q5zmjSjiKyn6vr211KkUqd8PyWHb3gjicYFRY9+iUuZFYtftjQfmXT//PjWfgbe7Bu49cdUQuch0e/V5cl0rdR1ehqOSNv5e8k3mgDvsur3zmKGUZJB9KfV3QnvA25+RRIgsw3S3V7lNBr1TWoaQPj5RhMigUKNp+6m/Ez8Xg94B1/CTYLEZaLYazWN64pTw+TSEESINqUijmRKvsCyfE9XQqCKEkZ31bCf6wlxKEeln/k70vDbsXMkiSCvvU9o3v91eCfGSC0VJTxwiZFgxN3FKw9CIBs73h9TzOttgw9tIjrPPRvD80lbmiTJic5tzZW+cVDbIPyRkqJWvWmtTUJSSBM17sTFzvGkYVs3z/sBNy86D9bg7nXuPdO0a5uq/8bqi8paSZWdvfvVvSBlWrbdwdT6KipTRLIMhZjlCHWtm3rkoKtvQvkP/EW6qtax76nJQVPRu7imn0HPSrF2r2rGFnaIi5RIMR9XVGWwIq2n94TtjbqPY3000AXB5Xl1rSN03lqBhvZXusNCCmGpt64CDD3zolx6rVuWvqkMR0VpuyEdR2khLNbaZTAle6lnprKr/nAEWz7d+ITgq0hRwa65eeSIChrHKZDxWnyY0KgW49DP8u1X16U5OHqpDPz/DTRFvz6rPc3LS+zqDpFy+/wXa+2MO8G1ehluVSTGAe5t86RUDoKJLMH4nfYhF8DHcV5kskJ2GCOZTPW+Z3fo5+fp0Dt2f5h6SnvIwzMi8EshzYrTa92eSZaTfgGJY0tl9G74VN6z05GCYlXkVHbNPeL/712PTtqVkVYFt3z5+dTHfqHiHBVhmhmGEyMqgioHe66s1m68izLst9F5fwGGZkWFooDkyr3VffS4y/ALWiGwMi2Re/6X6ZET4hBb6LAxLGoGQRIsEQ3CWi2dY3oeABX5urGwoQTTDykZgLRRncIJYhtWNwMKinJIgRjIAMUz2Ec5uDZpPURf9FucoTUSCxNiWWRwhcija8+pTcgDhgxF0yDm9TgM1V8sWOaIOcQRhs6dOlhpuNq8kLC56n0gxxIYNC6cyslPt3wvaV/8BpehHHQHYib0zrBhoGSK+Svx+hu48QUf2FVooU3R4MQUFVssKhxm4uwwRe09tKFZrgTj07tGPWYJW5RFmOlrSNQzKyDi3sBZqSLAvPyTI3+GnFIr9SPXZRfcea0SKdI8eCty8XZrKYZy1Sb73hOoYxvDfmAwIv9OW4t/ym+r8FrzD3gaGPWR9sm0f646KdMuXi3ff0I9V+uD4klbvCW0wij2dMX87b/6Gd8BfnF+gQO1amFz0rc0y5vTb6PfXtM4IAvHMwPpFNC/7A/tku48W+jqG/UQShb0h2h2j8KS/vIO/Q3r6pEtYd4giBNmHtPrnLH1rSzLO55XfkvXc+adiM/SM9TdSfQG2i28WiqH704/Ve5FX9t9XH1NfN1gen00Se/dRsM0fgKWv+8rD52rWbbm9IP6ms9vqzlZPD0r4PyzsIh84p/rW4h6CL3Qit6OpWL4uSfYWku5nezWIs0kPxZM2uMCQyImAfytQGuo2qaYBM8Owv2jrtCza0H2nxSCsQwV8Nz6N3hM+ctHxm4pXoE+YEjkaWDp5hCjCDDqPhBKG/SkgQhQBvg08FRT9QYSeVwK2RI4ZFKU1Gu/4WocVYYSoywHTWClITZoNdUSIIgRfaAmAgd+0js9IFkJ4ImcZq8MY6A5dRaA7UhXxnMB+vwAMFplXDAQlchKbzCsGAhI5Q2KWecWAQZEr5/dxsAhRBG9I546K9EtQEc8H6DeZKmEZYud3cIAkkTPsl2OIEEWY8yZylDKvGDC0Vvf56fUU8XzgSORqLOL5wKjIKTZPI7BmMCRy4mReMUC3VoXKvGKASuSEy7xiAE7kwghxdCkaDDBFri6ZVwwAiZx1dvAing8VrVWlVplXEOZGYSIX1hBHUsTzobC1yjhX6xiRm8iFRfxPjBBF6N5mFhUQzmQ8FqRmOoQR4kelaDD0nyR/s4hYuv3hEaII7vAtmo6hnDNP7fsJ8H6n0eUP/oAI/wevhmkaatrkzgAAAABJRU5ErkJggg=="
                style={{ width: "200px" }}
              />
            </div>
            <div className="mt-5">
              <h4 className="headline2">C# Programming Language</h4>
              <p className="p1">
                Without a doubt coding is the most in demand skill in the
                current market. So get your hands ready on these!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DomainSubjects;
