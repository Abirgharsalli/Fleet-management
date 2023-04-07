import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Users</span>
        <div className="featuredList">
          <span className="featuredNumber">25</span>
          <span className="comparation">
            -5% <ArrowDownward  className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Drivers</span>
        <div className="featuredList">
          <span className="featuredNumber">10</span>
          <span className="comparation">
            -3% <ArrowDownward className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Vehicles</span>
        <div className="featuredList">
          <span className="featuredNumber">30</span>
          <span className="comparation">
            +2% <ArrowUpward className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
}
