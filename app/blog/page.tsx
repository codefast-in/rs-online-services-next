"use client";
import React, {useEffect, useState} from "react";
import {title} from "@/components/primitives";
import dayjs from "dayjs";
import axios from "axios";

import {Spinner} from "@nextui-org/spinner";
import InfiniteScroll from "react-infinite-scroller";
import {blogData} from "@/Data";
import {
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";

import {
  CommentRounded,
  DateRangeRounded,
  PersonRounded,
  AddRounded,
  ExpandMoreRounded,
  MoreVertRounded,
  SearchRounded,
  ModeCommentRounded,
} from "@mui/icons-material";
import {Card, CardBody, CardFooter, CardHeader} from "@nextui-org/card";
import {Input} from "@nextui-org/input";
import {Button} from "@nextui-org/button";
import {HeartFilledIcon} from "@/components/icons";

const date = dayjs().format("DD,MMMYY");
const categiry = ["Results", "News", "Updates", "Books"];
const tags = [
  "Cloths",
  "Electronis",
  "Furniture",
  "Sports",
  "Men Wear",
  "Women Wear",
  "Laptops",
  "Formal Shirts",
  "Topwear",
  "Headphones",
  "Bottom Wear",
  "Bags",
];

function capitalize(str:any) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
export default function BlogPage() {
  const [apiRes, setApiRes] = useState({});
  const [postData, setPostData] = useState<any>([]);
  const [skip, setskip] = useState(0);
  const [limit, setlimit] = useState(6);
  const [totle, settotle] = useState(0);
  const [hasMore, sethasMore] = useState(true);


  
  let URL = "https://dummyjson.com/posts";

  const loadFunc = async () => {
    const response = await axios.get(URL + "?limit=" + limit + "&skip=" + skip);
    setApiRes(response.data);
    setPostData(postData.concat(response.data.posts));
    setskip(skip + limit);
    postData.length <= totle ? sethasMore(true) : sethasMore(false);
  };

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        URL + "?limit=" + limit + "&skip=" + skip
      );
      setApiRes(response.data);
      setPostData(response.data.posts);
      setskip(skip + limit);
      sethasMore(response.data.totle);
    })();
  }, []);

  return (
    <div className="max-w-7xl px-6">
      <div>
        <div className="flex flex-col gap-4">
          <div className="flex justify-between gap-3 items-end">
            <Input
              isClearable
              size="sm"
              className="w-full sm:max-w-[44%]"
              placeholder="Search by name..."
              startContent={<SearchRounded />}
              // value={filterValue}
              // onClear={() => onClear()}
              // onValueChange={onSearchChange}
              color="success"
            />
            <div className="flex gap-3">
              <div className="flex justify-between items-center">
                <span className="text-default-400 text-small">
                  Total {blogData.length} blogs
                </span>
              </div>
              <Dropdown backdrop="transparent">
                <DropdownTrigger className="hidden sm:flex">
                  <Button
                    endContent={<ExpandMoreRounded className="text-small" />}
                    variant="flat">
                    Category
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  disallowEmptySelection
                  // aria-label="Table Columns"
                  closeOnSelect={false}
                  // selectedKeys={statusFilter}
                  selectionMode="multiple"
                  // onSelectionChange={setStatusFilter}
                >
                  {categiry.map((status, index) => (
                    <DropdownItem
                      key={index}
                      className="capitalize"
                      color="success"
                      variant="faded">
                      {capitalize(status)}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
              {/* <Button color="primary" endContent={<AddRounded />}>
              Add New
            </Button> */}
            </div>
          </div>
        </div>
        <div className="flex gap-5 flex-col lg:flex-row">
            
          <div>
            
              
              {
                postData.length?postData.map((item: any, index: number) => (
              <Card key={index} className="my-5" isPressable>
                <CardHeader className="gap-3 text-default-500">
                  <div>
                    <PersonRounded /> <span>By Admin</span>
                  </div>

                  <div>
                    <DateRangeRounded /> <span>{date}</span>
                  </div>
                </CardHeader>
                <CardBody>
                  <h1 className="font-bold text-xl">{item.title}</h1>
                  <p>{item.body}</p>
                </CardBody>
                <CardFooter className="flex gap-5">
                  <div className="flex gap-2 items-center">
                    <HeartFilledIcon className="text-success" />
                    <h4 className="font-bold text-lg text-default-500">
                      {item.reactions}
                    </h4>
                  </div>
                  <div>
                    <ModeCommentRounded className="text-warning" />
                    <span className="font-bold text-default-500">
                      22 Comments
                    </span>
                  </div>
                  <div>
                    Tags
                    {item.tags.map((tags: any, index: number) => (
                      <Button
                        variant="ghost"
                        color="success"
                        className="mx-1 font-semibold"
                        key={index}>
                        {tags}
                      </Button>
                    ))}
                  </div>
                </CardFooter>
              </Card>
            )) :<Spinner label="Loading..." color="success" />} 
          </div>
          <div className="my-5">
            <div>
              <p className="font-bold text-xl text-start text-default-500">
                Popular Blogs
              </p>
              <div className="flex flex-col gap-2 my-5">
                {
                postData.length?
                (postData.slice(0,7).map((tag:any, index:number) => (
                  <Card key={index} className="font-semibold" isPressable>
                    <CardHeader className="text-start"> {tag.title}</CardHeader>
                    <CardFooter className="flex gap-5">
                      <div className="flex gap-2 items-center">
                        <HeartFilledIcon className="text-success" />
                        <h4 className="font-bold text-lg text-default-500">
                          {tag.reactions}
                        </h4>
                      </div>
                      <div className="flex gap-2 items-center">
                        <DateRangeRounded className="text-warning" />
                        <span>{date}</span>
                      </div>
                    </CardFooter>
                  </Card>
                ))):<Spinner label="Loading..." color="success" />}
              </div>
            </div>
            <div>
              <p className="font-bold text-xl text-start text-default-500">
                Popular Tags
              </p>
              <div className="flex flex-wrap gap-2 my-5">
                {tags.map((tag, index) => (
                  <Button
                    key={index}
                    variant="bordered"
                    color="success"
                    className="font-semibold">
                    {tag}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Button onClick={loadFunc} color="success" className="w-full text-white font-semibold">
          Load More
        </Button>
      </div>
    </div>
  );
}
