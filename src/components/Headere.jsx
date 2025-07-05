import Logo from "../assets/FullLogo.svg";
import Search from "../assets/SearchIcon.svg";
import Shopping from "../assets/ShoppingIcon.svg";
import User from "../assets/UserIcon.svg";
import Arrow from "../assets/ArrowDown.svg";

import { Link, NavLink } from "react-router-dom";

function Headere() {
  return (
    <header className="w-screen  px-27 py-8 items-center justify-between flex ">
      <div className="logoSection">
        <Link to={"/"}>
          <img src={Logo} alt="Logo" />
        </Link>
      </div>

      <ul className=" font-[vazir-normal]  text-[#717171] flex gap-6 ">
        <li>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-Primary  font-[vazir-bold]  border-b-1"
                : ""
            }
          >
            صفحه اصلی
          </NavLink>
        </li>
        {/* this 2 link has dropdown */}
        <li className="flex items-center relative">
          <NavLink
            to="TestPage"
            className={({ isActive, isPending }) =>
              isPending
                ? "ali"
                : isActive
                ? "text-Primary  font-[vazir-bold] border-b-1"
                : "alo"
            }
          >
            شعبه{" "}
          </NavLink>
          {/* drop down */}
          <span className="dropButton">
            <img src={Arrow} alt="Arrow" />
            <div className="dropCard z-10 bg-white w-36 h-40 absolute top-5 left-1 shadow-[0px_0px_6px_0px_rgba(0,_0,_0,_0.15)] rounded-md py-1 px-2 hidden flex-col justify-around">
              <div className=" border-b-1 ">
                <Link to={"TestPage"} className="w-full flex ">
                  اکباتان
                </Link>
              </div>
              <div className=" border-b-1">
                <Link to={"TestPage"} className="w-full flex ">
                  چالوس
                </Link>
              </div>
              <div className=" border-b-1">
                <Link to={"TestPage"} className="w-full flex ">
                  اقدسیه
                </Link>
              </div>
              <div className=" border-b-1">
                <Link to={"TestPage"} className="w-full flex ">
                  ونک
                </Link>
              </div>
            </div>
          </span>
        </li>
        <li className="flex items-center relative">
          <NavLink
            to="TestPage"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-Primary  font-[vazir-bold]  border-b-1"
                : ""
            }
          >
            منو
          </NavLink>
          {/* drop down */}
          <span className="dropButton">
            <img src={Arrow} alt="Arrow" />
            <div className="dropCard z-10 bg-white  w-36 h-40 absolute top-5 left-0.5 shadow-[0px_0px_6px_0px_rgba(0,_0,_0,_0.15)] rounded-md py-1 px-2 hidden flex-col justify-around">
              <div className=" border-b-1 ">
                <Link to={"TestPage"} className="w-full flex ">
                  غذای اصلی
                </Link>
              </div>
              <div className=" border-b-1">
                <Link to={"TestPage"} className="w-full flex ">
                  پیش غذا
                </Link>
              </div>
              <div className=" border-b-1">
                <Link to={"TestPage"} className="w-full flex ">
                  دسر
                </Link>
              </div>
              <div className=" border-b-1">
                <Link to={"TestPage"} className="w-full flex ">
                  نوشیدنی
                </Link>
              </div>
            </div>
          </span>
        </li>
        {/*  */}
        <li>
          <NavLink
            to="TestPage"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-Primary  font-[vazir-bold]  border-b-1"
                : ""
            }
          >
            اعطای نمایندگی
          </NavLink>
        </li>
        <li>
          <NavLink
            to="TestPage"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-Primary  font-[vazir-bold]  border-b-1"
                : ""
            }
          >
            درباره ما
          </NavLink>
        </li>
        <li>
          <NavLink
            to="TestPage"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-Primary  font-[vazir-bold]  border-b-1"
                : ""
            }
          >
            تماس با ما
          </NavLink>
        </li>
      </ul>

      <div className="iconContainer flex gap-2 items-center font-[vazir-normal]  text-[#717171] ">
        <div className="w-10 h-10 rounded-sm bg-Primary/10 flex items-center justify-center ">
          <img src={Search} alt="Search" />
        </div>
        <div className="w-10 h-10 rounded-sm bg-Primary/10 flex items-center justify-center ">
          <img src={Shopping} alt="Shopping" />
        </div>
        {/* this button has dropdown */}
        <div className="w-14.5 h-10 rounded-sm bg-Primary/10 flex items-center justify-center  relative ">
          <img src={User} alt="User" />
          <span className="dropButton  h-full flex items-center">
            <img src={Arrow} alt="Arrow" />
            <div className="dropCard z-10 bg-white w-36 h-50 absolute top-10  left-0.5 shadow-[0px_0px_6px_0px_rgba(0,_0,_0,_0.15)] rounded-md py-1 px-2 hidden flex-col justify-around">
              <div className=" border-b-1 ">
                <Link to={"TestPage"} className="w-full flex items-center">
                  <svg
                    className=" ml-1"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.00033 8.49967C5.88699 8.49967 4.16699 6.77967 4.16699 4.66634C4.16699 2.55301 5.88699 0.833008 8.00033 0.833008C10.1137 0.833008 11.8337 2.55301 11.8337 4.66634C11.8337 6.77967 10.1137 8.49967 8.00033 8.49967ZM8.00033 1.83301C6.44033 1.83301 5.16699 3.10634 5.16699 4.66634C5.16699 6.22634 6.44033 7.49967 8.00033 7.49967C9.56033 7.49967 10.8337 6.22634 10.8337 4.66634C10.8337 3.10634 9.56033 1.83301 8.00033 1.83301Z"
                      fill="#353535"
                    />
                    <path
                      d="M13.7268 15.1667C13.4534 15.1667 13.2268 14.94 13.2268 14.6667C13.2268 12.3667 10.8801 10.5 8.0001 10.5C5.1201 10.5 2.77344 12.3667 2.77344 14.6667C2.77344 14.94 2.54677 15.1667 2.27344 15.1667C2.0001 15.1667 1.77344 14.94 1.77344 14.6667C1.77344 11.82 4.56677 9.5 8.0001 9.5C11.4334 9.5 14.2268 11.82 14.2268 14.6667C14.2268 14.94 14.0001 15.1667 13.7268 15.1667Z"
                      fill="#353535"
                    />
                  </svg>
                  پروفایل
                </Link>
              </div>
              <div className=" border-b-1">
                <Link to={"TestPage"} className="w-full flex items-center">
                  <svg
                    className=" ml-1"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.66699 6.5H4.66699C4.39366 6.5 4.16699 6.27333 4.16699 6C4.16699 5.72667 4.39366 5.5 4.66699 5.5H8.66699C8.94033 5.5 9.16699 5.72667 9.16699 6C9.16699 6.27333 8.94033 6.5 8.66699 6.5Z"
                      fill="#353535"
                    />
                    <path
                      d="M12.6936 9.86613C11.6869 9.86613 10.8336 9.11946 10.7536 8.15946C10.7003 7.60613 10.9003 7.06614 11.3003 6.67281C11.6336 6.32614 12.1069 6.13281 12.6069 6.13281H14.0003C14.6603 6.15281 15.1669 6.67278 15.1669 7.31279V8.68616C15.1669 9.32616 14.6603 9.84613 14.0203 9.86613H12.6936ZM13.9802 7.13281H12.6136C12.3803 7.13281 12.1669 7.21948 12.0136 7.37948C11.8203 7.56614 11.7269 7.81946 11.7536 8.07279C11.7869 8.51279 12.2136 8.86613 12.6936 8.86613H14.0003C14.0869 8.86613 14.1669 8.78616 14.1669 8.68616V7.31279C14.1669 7.21279 14.0869 7.13948 13.9802 7.13281Z"
                      fill="#353535"
                    />
                    <path
                      d="M10.6663 14.1663H4.66634C2.37301 14.1663 0.833008 12.6263 0.833008 10.333V5.66634C0.833008 3.61301 2.09966 2.12635 4.06632 1.87968C4.24633 1.85301 4.45301 1.83301 4.66634 1.83301H10.6663C10.8263 1.83301 11.033 1.83967 11.2463 1.87301C13.213 2.09967 14.4997 3.59301 14.4997 5.66634V6.63302C14.4997 6.90635 14.273 7.13302 13.9997 7.13302H12.613C12.3797 7.13302 12.1664 7.21968 12.013 7.37968L12.0063 7.38635C11.8197 7.56635 11.733 7.81299 11.753 8.06633C11.7863 8.50633 12.213 8.85966 12.693 8.85966H13.9997C14.273 8.85966 14.4997 9.08633 14.4997 9.35966V10.3263C14.4997 12.6263 12.9597 14.1663 10.6663 14.1663ZM4.66634 2.83301C4.50634 2.83301 4.353 2.84633 4.19967 2.86633C2.733 3.053 1.83301 4.11967 1.83301 5.66634V10.333C1.83301 12.053 2.94634 13.1663 4.66634 13.1663H10.6663C12.3863 13.1663 13.4997 12.053 13.4997 10.333V9.86633H12.693C11.6863 9.86633 10.833 9.11967 10.753 8.15967C10.6997 7.613 10.8997 7.06635 11.2997 6.67969C11.6463 6.32635 12.113 6.13302 12.613 6.13302H13.4997V5.66634C13.4997 4.10634 12.5863 3.03299 11.1063 2.85966C10.9463 2.83299 10.8063 2.83301 10.6663 2.83301H4.66634Z"
                      fill="#353535"
                    />
                  </svg>
                  پیگیری سفارش
                </Link>
              </div>
              <div className=" border-b-1">
                <Link to={"TestPage"} className="w-full flex items-center">
                  <svg
                    className=" ml-1"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.99967 14.4331C7.79301 14.4331 7.59301 14.4064 7.42634 14.3464C4.87967 13.4731 0.833008 10.3731 0.833008 5.79307C0.833008 3.45974 2.71967 1.56641 5.03967 1.56641C6.16634 1.56641 7.21967 2.00641 7.99967 2.79307C8.77967 2.00641 9.83301 1.56641 10.9597 1.56641C13.2797 1.56641 15.1663 3.46641 15.1663 5.79307C15.1663 10.3797 11.1197 13.4731 8.57301 14.3464C8.40634 14.4064 8.20634 14.4331 7.99967 14.4331ZM5.03967 2.56641C3.27301 2.56641 1.83301 4.01307 1.83301 5.79307C1.83301 10.3464 6.21301 12.8797 7.75301 13.4064C7.87301 13.4464 8.13301 13.4464 8.25301 13.4064C9.78634 12.8797 14.173 10.3531 14.173 5.79307C14.173 4.01307 12.733 2.56641 10.9663 2.56641C9.95301 2.56641 9.01301 3.03974 8.40634 3.85974C8.21967 4.11307 7.79301 4.11307 7.60634 3.85974C6.98634 3.03307 6.05301 2.56641 5.03967 2.56641Z"
                      fill="#353535"
                    />
                  </svg>
                  علاقه‌مندی‌ها
                </Link>
              </div>
              <div className=" border-b-1">
                <Link to={"TestPage"} className="w-full flex items-center">
                  <svg
                    className=" ml-1"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.99992 9.4463C6.57992 9.4463 5.41992 8.29297 5.41992 6.8663C5.41992 5.43964 6.57992 4.29297 7.99992 4.29297C9.41992 4.29297 10.5799 5.4463 10.5799 6.87297C10.5799 8.29964 9.41992 9.4463 7.99992 9.4463ZM7.99992 5.29297C7.13326 5.29297 6.41992 5.99964 6.41992 6.87297C6.41992 7.7463 7.12659 8.45297 7.99992 8.45297C8.87326 8.45297 9.57992 7.7463 9.57992 6.87297C9.57992 5.99964 8.86659 5.29297 7.99992 5.29297Z"
                      fill="#353535"
                    />
                    <path
                      d="M8.00012 15.173C7.01345 15.173 6.02012 14.7997 5.24678 14.0597C3.28012 12.1663 1.10678 9.14634 1.92678 5.55301C2.66678 2.29301 5.51345 0.833008 8.00012 0.833008C8.00012 0.833008 8.00012 0.833008 8.00678 0.833008C10.4935 0.833008 13.3401 2.29301 14.0801 5.55967C14.8934 9.15301 12.7201 12.1663 10.7534 14.0597C9.98012 14.7997 8.98678 15.173 8.00012 15.173ZM8.00012 1.83301C6.06012 1.83301 3.56678 2.86634 2.90678 5.77301C2.18678 8.91301 4.16012 11.6197 5.94678 13.333C7.10012 14.4463 8.90678 14.4463 10.0601 13.333C11.8401 11.6197 13.8134 8.91301 13.1068 5.77301C12.4401 2.86634 9.94012 1.83301 8.00012 1.83301Z"
                      fill="#353535"
                    />
                  </svg>
                  آدرس‌های من
                </Link>
              </div>
              <div className=" border-b-1">
                <Link to={"TestPage"} className="w-full flex items-center">
                  <svg
                    className=" ml-1"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.1597 14.8467H10.073C7.11302 14.8467 5.68635 13.68 5.43968 11.0667C5.41302 10.7933 5.61302 10.5467 5.89302 10.52C6.15968 10.4933 6.41302 10.7 6.43968 10.9733C6.63302 13.0667 7.61968 13.8467 10.0797 13.8467H10.1664C12.8797 13.8467 13.8397 12.8867 13.8397 10.1733V5.82665C13.8397 3.11332 12.8797 2.15332 10.1664 2.15332H10.0797C7.60635 2.15332 6.61968 2.94665 6.43968 5.07999C6.40635 5.35332 6.17302 5.55999 5.89302 5.53332C5.61302 5.51332 5.41302 5.26665 5.43302 4.99332C5.65968 2.33999 7.09302 1.15332 10.073 1.15332H10.1597C13.433 1.15332 14.833 2.55332 14.833 5.82665V10.1733C14.833 13.4467 13.433 14.8467 10.1597 14.8467Z"
                      fill="#353535"
                    />
                    <path
                      d="M9.99975 8.5H2.41309C2.13975 8.5 1.91309 8.27333 1.91309 8C1.91309 7.72667 2.13975 7.5 2.41309 7.5H9.99975C10.2731 7.5 10.4998 7.72667 10.4998 8C10.4998 8.27333 10.2731 8.5 9.99975 8.5Z"
                      fill="#353535"
                    />
                    <path
                      d="M3.89964 10.7336C3.77297 10.7336 3.6463 10.6869 3.5463 10.5869L1.31297 8.35356C1.11964 8.16022 1.11964 7.84022 1.31297 7.64689L3.5463 5.41355C3.73964 5.22022 4.05964 5.22022 4.25297 5.41355C4.4463 5.60689 4.4463 5.92689 4.25297 6.12022L2.37297 8.00022L4.25297 9.88022C4.4463 10.0736 4.4463 10.3936 4.25297 10.5869C4.15964 10.6869 4.0263 10.7336 3.89964 10.7336Z"
                      fill="#353535"
                    />
                  </svg>
                  خروج از حساب
                </Link>
              </div>
            </div>
          </span>
        </div>
        {/*  */}
      </div>
    </header>
  );
}

export default Headere;
