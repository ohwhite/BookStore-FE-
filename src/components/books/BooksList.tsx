import styled from "styled-components"
import BooksItem from "./BookItem";
import { Book } from "../../models/book.model";
import { QUERYSTRING } from "../../constants/querystring";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ViewMode } from "./BooksViewSwitcher";
import { isDataView } from "node:util/types";

interface Props {
  books: Book[];
}

const BooksList = ({books} : Props) => {
  const [view, setView] = useState<ViewMode>("grid")
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if(params.get(QUERYSTRING.VIEW)) {
      setView(params.get(QUERYSTRING.VIEW) as ViewMode);
    }
  }, [location.search])
  return (
    <>
    <BooksListstyle view={view}>
      {books?.map((item)=> (
        <BooksItem key={item.id} book={item} view={view}/>
      ))}
    </BooksListstyle>
    </>
  )
}

interface BooksListStyleProps{
  view: ViewMode;
}
const BooksListstyle = styled.div<BooksListStyleProps>`
  display: grid;
  grid-template-columns: ${({view}) => (view === "grid" ? "repeat(4, 1fr)" : "repeat(1, 1fr)")};
  gap: 24px;

`;

export default BooksList;