import React, { useState } from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Textarea,
} from "@material-tailwind/react";
import axios from "../../utils/helpers/axios";

import Btn from "../../components/Button/button.component";
import PopUp from "../../components/popup";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [popupIsOpen, setPopupIsOpen] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formObj = {
      name: name,
      email: email,
      phone: phone,
      message: message,
    };

    const response = await axios.post("/user/form", formObj);
    console.log(response);
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    setPopupIsOpen(true);
    if (response) {
      setPopupMessage(response.data.message);
    }
  };
  const closePopup = () => {
    setPopupIsOpen(false);
  };

  return (
    <div className="grid grid-cols-2 mx-[5rem] gap-10 relative">
      <div className="w-full my-10">
        <Card color="transparent" shadow={false} className="w-full">
          <Typography variant="h4" color="blue-gray" className="text-center">
            Drop A Line
          </Typography>

          <form className="mt-8 mb-2 w-full" onSubmit={handleFormSubmit}>
            <div className="mb-4 flex flex-col gap-6">
              <Input
                size="lg"
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                size="lg"
                label="Email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                size="lg"
                label="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <Textarea
                label="Message"
                value={message}
                required
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <Button className="" type="submit">
              Send
            </Button>
          </form>
          <Typography className="text-[8pt]">
            By signing up, you agree to receive Beauty Industry Group and its
            Affiliated Entities offers, promotions and other commercial
            messages. You are also agreeing to Beauty Industry Group and its
            Affiliated Entities conditions of use, Privacy Policy and Terms of
            Conditions. You may unsubscribe at any time
          </Typography>
        </Card>
      </div>
      <div className="my-10">
        <Typography className="text-sm font-semibold">
          Please Get In Touch!
        </Typography>
        <Typography className="text-sm  pt-3">
          We&apos;d love to here from you
        </Typography>
        <Typography className="text-sm  pt-3">
          21123 Nordhoff
          <p>St Chatsworth, CA 91311, </p>
          <p>United States</p>
        </Typography>
        <Typography className="text-sm  pt-3">
          <p>Email: info@lafamaine.com</p>
          <p>Toll-free: 1.844.lafamaine (1.844.235.5264)</p>
        </Typography>
        <Typography className="text-sm  pt-3">
          <p>Opening Hours: </p>
          <p>Monday to Friday: 7:00 AM TO 4:00 PM PDT</p>
        </Typography>
        <Typography className="text-sm font-semibold pt-5">
          International Customers
        </Typography>
        <div className="mt-3">
          <div className="pb-3">
            <Button className="">International Customer Help Center </Button>
          </div>
          <div className="pb-3">
            <Button className="">International Order Tracking</Button>
          </div>
          <div>
            <Button className="">International Return Portal</Button>
          </div>
        </div>
      </div>
      <PopUp
        isOpen={popupIsOpen}
        onClose={closePopup}
        popupContent={popupMessage}
      />
    </div>
  );
};

export default Contact;
