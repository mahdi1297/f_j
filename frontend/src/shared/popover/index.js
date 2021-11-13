import React, { useState } from "react";
import { Button, Popover, PopoverHeader, PopoverBody } from "reactstrap";

const PopoverContainer = (props) => {
  const { item } = props;
  const [popover, setPopover] = useState(false);
  const DirectionToggle = () => setPopover(!popover);
  return (
    <>
      <Button
        color={item.btncolor}
        className="example-popover"
        id={"Popover-" + item.id}
      >
        {item.btntext}
      </Button>
      <Popover
        placement={item.placement}
        isOpen={popover}
        target={"Popover-" + item.id}
        toggle={DirectionToggle}
      >
        <PopoverHeader>{item.Popoverheader}</PopoverHeader>
        <PopoverBody>{item.Popoverbody}</PopoverBody>
      </Popover>
    </>
  );
};

export default PopoverContainer;
