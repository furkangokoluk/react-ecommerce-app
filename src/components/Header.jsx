import Badge from '@mui/material/Badge';
import React, { useState } from "react";
import { CiLight } from "react-icons/ci";
import { IoMoonSharp } from "react-icons/io5";
import { LuShoppingBasket } from "react-icons/lu";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import "../css/Header.css";
import { setDrawer } from '../redux/slices/BasketSlice';

function Header() {

  const [theme, setTheme] = useState(false);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { basketProducts } = useSelector((store) => store.basket)

  const changeTheme = () => {
    const root = document.getElementById("root");
    setTheme(!theme);
    if (theme) {
      root.style.backgroundColor = "rgb(46, 46, 46)";
      root.style.color = "#fff"
    } else {
      root.style.backgroundColor = "#fff";
      root.style.color = "rgb(46, 46, 46)"
    }
  }

  return (
    <div className="justify-space-between">
      <div onClick={() => navigate("/")} className="flex-row">
        <img className="logo" src="./src/images/logo.png" />
        <p className="logo-text">Kantua</p>
      </div>

      <div className="flex-row">
        <input className="search-input" type="text" placeholder="Bir Şeyler Ara" />
        <div>

          <Badge onClick={()=> dispatch(setDrawer())} badgeContent={basketProducts.length} color="error">
            <LuShoppingBasket className="icon" />
          </Badge>

          {theme ? <IoMoonSharp className="icon" onClick={changeTheme} /> : <CiLight className="icon" onClick={changeTheme} />}
        </div>
      </div>

    </div>
  )
}

export default Header;
