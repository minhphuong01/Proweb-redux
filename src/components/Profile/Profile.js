import React from "react";
import styles from "./Profile.css";
export const Profile = () => {
    return(
        <div className="Proweb">
             <table border="1"> 
       <tr>
           <th colspan="2">Nhóm PROWEB</th>  
       </tr>
       <tr>
           <th>Họ tên</th>
           <th>MSSV</th>
       </tr>
       <tr>
            <td>Nguyễn Hoàng Cát</td>
           <td>4501104021</td>
       </tr>
       <tr>
            <td>Nguyễn Hoàng Lan Vy</td>
           <td>4501104283</td>
       </tr>
       <tr>
            <td>Hồ Văn Tài</td>
           <td>4501104201</td>
       </tr>
       <tr>
            <td>Phạm Như ý</td>
           <td>4501104287</td>
       </tr>
       <tr>
            <td>Nguyễn Thị Minh Phượng</td>
           <td>4501104187</td>
       </tr>
         </table>
        </div>
      
    )
}