import React from "react";
import { MapPin, User, Mail, Wifi, Home } from "react-feather";

const ComponyTotalData = ({ data }) => {
  return (
    <div>
      <div className="total-data-container b-r-5 p-3">
        <p className="f-16 f-w-900">{data.componyname}</p>
        <p className="f-14"> شرکت {data.componyname}</p>
        <br />
        <p className="f-14 f-w-900">
          <MapPin size={14} />
          مکان شرکت
        </p>
        <p className="f-14 p-r-5">{data.componycity}</p>
        <br />
        <p className="f-14 f-w-900">
          <User size={14} />
          تعداد کارکنان
        </p>
        <p className="f-14 p-r-5">{data.workers}</p>
        <br />
        <p className="f-14 f-w-900">
          <Mail size={14} />
          آدرس ایمیل
        </p>
        <p className="f-14 p-r-5">{data.email}</p>
        <br />
        <p className="f-14 f-w-900">
          <Wifi size={14} />
          آدرس وب سایت
        </p>
        <p className="f-14 p-r-5">{data.website}</p>
        <br />
        <p className="f-14 f-w-900">
          <Home size={14} />
          آدرس شرکت
        </p>
        <p className="f-14 p-r-5">{data.address}</p>
      </div>
    </div>
  );
};

export default ComponyTotalData;
