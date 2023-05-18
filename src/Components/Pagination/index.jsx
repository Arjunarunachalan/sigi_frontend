import React, { useState,useEffect } from "react";
import Downarrow from "../../assets/images/Downarrow.svg";
import LeftArrow from "../../assets/images/leftArrow.svg";
import RightArrow from "../../assets/images/rightArrow.svg";

const Pagination = (props) => {
  const {onRowsPerTableChange,data}=props
  
  const initialvalue = { data: "5" };
  const [select, setSelect] = useState(false);
  const [rowsLimit, setRowsLimit] = useState(5);
  const [page, setPage] = useState(1);
 const pages = Math.ceil(parseInt(props.Data) );
  const [pageNo, setpageNo] = useState([]);
 

  const Selected = () => {
    setSelect(true);
  };

  const onRowsLimitChange = (e) => {
    var data = e.target.value;
    setRowsLimit(data);
    onRowsPerTableChange(data)
    setSelect(false);
   
  };
  const prevPage = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
      props.pageVal(parseInt(page));
    }
  };
  const nxtPage = () => {
    if (page < pages) {
      setPage((prev) => prev + 1);
      props.pageVal(parseInt(page));
    }
  };

  //
  useEffect(() => {
    let pages;

    pageNos(pages);
    if(data.length>0){
      onRowsPerTableChange(5)
    }
    

  }, [data]);

  const pageNos = (pages) => {
    let i;
    let pageNo = [];
    for (i = 1; i <= pages; i++) {
      pageNo.push(i);
    }
    setpageNo([1, ...pageNo]);
    console.log(pageNo,"value of the page");
  };

  return (
    <div className="w-full flex">
      <div className="w-1/2 items-center flex justify-start relative p-4">
        {select && (
          <div
            className="w-[90px] h-[100px] bg-[#fff] absolute items-center rounded-lg shadow-2xl font-bold "
            id="parent"
          >
            <button
              value="5"
              onClick={onRowsLimitChange}
              className="w-full h-1/3 justify-center items-center flex  hover:bg-hover-color"
              type="button"
            >
              5
            </button>
            <button
              value="10"
              onClick={onRowsLimitChange}
              className="w-full h-1/3 justify-center items-center flex   hover:bg-hover-color"
              type="button"
            >
              10
            </button>
            <button
              value="15"
              onClick={onRowsLimitChange}
              className="w-full h-1/3 justify-center items-center flex   hover:bg-hover-color"
              type="button"
            >
              15
            </button>
          </div>
        )}
        <button
          onClick={Selected}
          className=" w-[100px] h-[20px] bg-gray flex justify-center items-center p-1"
        >
          <div className="w-2/3 h-full justify-center items-center flex">
            {rowsLimit} rows
          </div>
          <div className="w-1/3 h-full justify-center items-end flex">
            <img src={Downarrow} alt="" />{" "}
          </div>
        </button>
      </div>
      <div className="w-1/2 items-center flex justify-end p-4">
        <span className="p-4">
          <img src={LeftArrow} alt="arrow" onClick={prevPage} />
        </span>
        <span>{pageNo.map((pageNum)=>(
          <button key={pageNum}>{pageNum}</button>
        ))}</span>
        <span className="p-4">
          <img src={RightArrow} alt="arrow" onClick={nxtPage} />
        </span>
      </div>
    </div>
  );
};

export default Pagination;
