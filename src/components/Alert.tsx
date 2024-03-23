import { ReactNode, useEffect, useState } from "react";
import apiUrl from "../apiUrl";
var url = apiUrl

interface Props {
    children: ReactNode;
}

function Alert(props: Props) {
    const [myData, setData] = useState([]);
    useEffect(() => {
        fetchApiRes();
    }, []);

    const fetchApiRes = async () => {
        try {
            let oldBillsUrl = url + '/oldBills'
            return await fetch(oldBillsUrl, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
                .then(res => res.json())
                .then(d => setData(d.data))

        } catch (error) { }
    }

    console.log("myData", myData);

    return (
        <>
            <div style={{display: 'flex'}}>

                <div>
                    {
                        myData.map((item: any) => {
                            console.log("item", item);
                            console.log("item.name", item.name);

                            item.bill_history.map((x:any)=>{
                                console.log("x",x);
                            })
                            
                            return (
                                <div className="item">{item.name}</div>
                            )

                        })

                    }
                </div>


                <div>
                    {
                        myData.map((data: any) => {
                            console.log("dataa", data);

                            return (
                                <div>{data.mobile_no}</div>
                            )
                        })
                    }
                </div>

            </div>
        </>
    )
}
export default Alert;