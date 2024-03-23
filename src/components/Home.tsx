import { useState } from "react";

interface Props {
    list: string[],
    heading: string
}

function Home(props : Props) {
    let number = 1;
    let list = [];
    let [enter_no, setInputValue] = useState('');
    let [selectedIndex, setSelectedIndex] = useState(-1);

    const convertintoParseInt = parseInt(enter_no);
    for (let i = number; i <= convertintoParseInt; i++) {
        list.push({
            name: `item ${i}`,
            detail: `This is item no. ${i}`
        })
    }

    // passing data via props
    console.log("list",props.list);
    console.log("heading",props.heading);
    
    return (        
        <div className="card">
            <div className="d-flex">
                <div className="card-body col-12 d-flex">
                    <div className="col-1">Enter No.</div>

                    <div className="col-11 d-flex">
                        <div className="input-group mb-3 flex-grow-1">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Recipient's username"
                                aria-label="Recipient's username"
                                aria-describedby="button-addon2"
                                value={enter_no}
                                onChange={(e: any) => setInputValue(e.target.value)}
                            />
                        </div>
                    </div>

                </div>
            </div>

            <ul className="list-group">
                {list.map((item, index) => (
                    <li key={index} 
                    className = { selectedIndex == index ? 'list-group-item active' : 'list-group-item' }
                        onClick={() => {
                            console.log("item", item);
                            setSelectedIndex(index)
                        }}>
                        <b>Name: </b>{item.name}
                        <br />
                        <b>Detail: </b>{item.detail}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;