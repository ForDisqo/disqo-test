import React from "react";
import {useDispatch, useSelector} from "react-redux";

import "./Dashboard.styles.scss";
import { Link } from "react-router-dom";
import {RootState} from "../../redux/reducers";
import {getPublicGists} from "./redux/actions";
import moment from "moment";
import {Button} from "../../components";
import {ButtonTypeEnum} from "../../components/button";
import {IGist} from "./Interfaces";
import {Paths} from "../../config/enum/Paths";
import Chart from "./components/chart/Chart";

const Dashboard = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = React.useState(false);
    const gistCreated: IGist[] = useSelector((state: RootState) => state.publicGists.gistCreated);
    const filesPerGist: IGist[] = useSelector((state: RootState) => state.publicGists.filesPerGist);

    React.useEffect(() => {dispatch(getPublicGists());}, [dispatch]);

    const gistCreatedData = React.useMemo(() => {
        return gistCreated.map((e: IGist) => ({
            name: moment(new Date(+e.date)).format("DD MMMM hh:mm:ss"),
            length: e.data.length,
        }));
    }, [gistCreated]);

    const filesPerGistData = React.useMemo(() => {
        return filesPerGist.map((e: IGist) => ({
            name: moment(e.created_at).format("DD MMMM hh:mm:ss"),
            length: Object.keys(e.files).length,
        }));
    }, [filesPerGist]);

    const handleLoadMore = () => {
        dispatch(getPublicGists());
        setLoading(true);
        setTimeout(() => {setLoading(false);}, 1000);
    };
  return (
    <div className="dashboard">
        <div className="row" >
            <div className="col">

                <Link  to={Paths.HOME_PAGE}>
                    <Button
                        text="To Home"
                        onClick={()=>{}}
                        buttonType={ButtonTypeEnum.view}
                    />
                </Link>


            </div>
            <div className="col">

                <Button
                    text={loading ? "Loading..." : " Load more"}
                    onClick={handleLoadMore}
                    disabled={loading}
                    buttonType={ButtonTypeEnum.view}
                />

            </div>
        </div>
        <div className="charts">
            <Chart title="Gists Created" data={gistCreatedData} />
            <Chart title="Files Per Gist" data={filesPerGistData} />
        </div>
    </div>
  );
};

export default Dashboard;
