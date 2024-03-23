import { useLocation } from "react-router-dom";
import './Bookdetail.scss';
import Rating from '@mui/material/Rating';
import AutoStoriesTwoToneIcon from '@mui/icons-material/AutoStoriesTwoTone';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';

const Bookdetails = () => {
    const { state } = useLocation();
    let pageData = state.data;
    console.log("state", pageData)
    
    return (
        <>
            <div className="card mx-auto w-11/12 py-6 sm:px-6 lg:px-8 mt-5">
                <div className="heading flex flex-row">
                    <div className="basis-1/4">
                    </div>
                    <div className="basis-3/4  flex flex-row justify-between pl-8">
                        <span>{pageData.volumeInfo.title}</span>
                        <span><Rating name="read-only" value={pageData.volumeInfo.averageRating} readOnly /></span>
                    </div>
                </div>

                <div className=" flex flex-row">
                    <div className="basis-1/4 card">
                        <img src={pageData.volumeInfo.imageLinks.smallThumbnail} alt="" />
                    </div>
                    <div className="basis-3/4 ml-5 p-3">
                        <div className="body">
                            <div className="desc">
                                <span className="font-bold">Based on: </span>
                                <span>
                                    {pageData.volumeInfo.subtitle}
                                </span>
                                <br />
                                <span className="font-bold">Authors: </span>
                                <span>
                                    {pageData.volumeInfo.authors.map((auth: any) => (
                                        auth
                                    ))}
                                </span>
                                <br />
                                <span className="font-bold">Category: </span>
                                <span>
                                    {pageData.volumeInfo.categories.map((auth: any) => (
                                        auth
                                    ))}
                                </span>
                                <br />
                                <span className="font-bold">Description: </span>
                                <span>
                                    {pageData.volumeInfo.description}
                                </span>
                                <br />
                                <span className="font-bold">No. of Pages: </span>
                                <span>
                                    {pageData.volumeInfo.pageCount}
                                </span>
                                <br />
                                <span className="font-bold">Published Date: </span>
                                <span>
                                    {pageData.volumeInfo.publishedDate}
                                </span>
                                <br />
                                <span className="font-bold">Publisher: </span>
                                <span>
                                    {pageData.volumeInfo.publisher}
                                </span>
                                <br />
                                <span className="font-bold">Language: </span>
                                <span>
                                    {pageData.volumeInfo.language}
                                </span>
                                <br />
                                {/* <span className="font-bold">Read: </span>
                                <span>
                                    <a href={pageData.accessInfo.webReaderLink} target="_blank" rel="noopener noreferrer">
                                        <AutoStoriesTwoToneIcon />
                                    </a>
                                </span>
                                <br /> */}
                                <span className="font-bold">PDF: </span>
                                <span>
                                    <a href={pageData.accessInfo.pdf.acsTokenLink} target="_blank" rel="noopener noreferrer">
                                        {pageData.accessInfo.pdf.isAvailable ? 'AVAILABLE_IN_PDF' : 'NOT_AVAILABLE_IN_PDF'}
                                    </a>
                                </span>
                                <br />
                                <span className="font-bold">Country: </span>
                                <span>
                                    {pageData.saleInfo.country}
                                </span>
                                <br />
                                <span className="font-bold">Buy: </span>
                                <span>
                                    {
                                        pageData.saleInfo.buyLink ?
                                            (
                                                <a href={pageData.saleInfo.buyLink} target="_blank" rel="noopener noreferrer">
                                                    <ShoppingCartTwoToneIcon />
                                                </a>
                                            ) : (
                                                pageData.saleInfo.saleability
                                            )}

                                </span>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Bookdetails;