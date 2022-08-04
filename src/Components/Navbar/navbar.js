import React, { useEffect, useState } from "react";
import ineuronLogo from "../../images/ineuron-logo.png";
import { Input, InputAdornment, Button, ListItem, List } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./navbar.scss";
import { data } from "./data";

const length = data.length;

export default function Navbar() {
  const [rotateIcon, setRotateIcon] = useState({
    id: -1,
  });
  const [list, setList] = useState({
    items: [],
    id: -1,
  });
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    const filterList = data.filter((d) => d.id === rotateIcon.id);
    setList((prev) => ({
      ...prev,
      items: filterList[0]?.list,
      id: filterList[0]?.id,
    }));
  }, [rotateIcon]);

  return (
    <>
      <nav>
        <div>
          <img src={ineuronLogo} alt="" />
          <Input
            placeholder="What do you want to learn?"
            className="navbar-search"
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon className="navbar-icon" />
              </InputAdornment>
            }
          />
          <Button className="navbar-button" variant="outlined">
            Sign up
          </Button>
          <Button className="navbar-button" variant="contained">
            Sign in
          </Button>
        </div>
        <div className="navbar-contents">
          <ul>
            <li
              onMouseEnter={() => {
                setDisplay(true);
              }}
            >
              Courses <ExpandMoreIcon className="navbar-list-icon" />
            </li>
            <li onMouseLeave={() => setDisplay(false)}>One Neuron</li>
            <li>Job Portal</li>
            <li>Internship Portal</li>
            <li>Become an affiliate</li>
            <li>
              <a
                style={{ textDecoration: "none", color: "inherit" }}
                href="#hallofFameSection"
              >
                Hall of fame
              </a>
            </li>
            <li>Blog</li>
            <li>
              Company <ExpandMoreIcon className="navbar-list-icon" />
            </li>
          </ul>
        </div>
      </nav>
      <div
        style={{
          display: display ? "block" : "none",
        }}
        className="navbar-expandlist"
      >
        <div
          onMouseLeave={() => {
            setRotateIcon((prev) => ({ ...prev, id: -1 }));
            setDisplay(false);
          }}
          className="navbar-expandlist-courses"
        >
          <div className="navbar-list-courses">
            <div className="navbar-show-courses">
              <List>
                {data.map((d, i) => {
                  if (i < length / 2) {
                    return (
                      <ListItemFunc
                        rotateIcon={rotateIcon}
                        setRotateIcon={setRotateIcon}
                        data={d}
                        id={d.id}
                        key={d.id}
                      />
                    );
                  }

                  return null;
                })}
              </List>
            </div>
            <div>
              <List>
                {list?.items?.length > 0 ? (
                  list.items.map((d, i) => {
                    if (list.id < length / 2) {
                      return (
                        <ListItem className="navbar-sub-courses" key={i}>
                          {d.title}
                        </ListItem>
                      );
                    }
                    return null;
                  })
                ) : (
                  <div></div>
                )}
              </List>
            </div>
          </div>
          <div className="navbar-list-courses">
            <div className="navbar-show-courses">
              <List>
                {data.map((d, i) => {
                  if (i >= length / 2) {
                    return (
                      <ListItemFunc
                        rotateIcon={rotateIcon}
                        setRotateIcon={setRotateIcon}
                        data={d}
                        id={d.id}
                        key={d.id}
                      />
                    );
                  }

                  return null;
                })}
              </List>
            </div>
            <div>
              <List>
                {list?.items?.length > 0 &&
                  list.items.map((d, i) => {
                    if (list.id >= length / 2) {
                      return (
                        <ListItem className="navbar-sub-courses" key={i}>
                          {d.title}
                        </ListItem>
                      );
                    }
                    return null;
                  })}
              </List>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const ListItemFunc = ({ data, rotateIcon, setRotateIcon, id }) => {
  return (
    <ListItem
      onMouseEnter={(e) => {
        setRotateIcon((prev) => ({ ...prev, id: id }));
      }}
      className="navbar-list-hover"
    >
      {data.title}{" "}
      <ExpandMoreIcon
        style={{
          transform: rotateIcon.id === id ? `rotate(0deg)` : `rotate(-90deg)`,
        }}
      />
    </ListItem>
  );
};
