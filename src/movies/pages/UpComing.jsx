/* eslint-disable react-refresh/only-export-components */
import React, { useState } from "react";
import LayoutMovies from "../component/Layout";
import { Row, Col, DatePicker, Skeleton } from "antd";
import moment from 'moment';
import { api } from "../sevices/api";
import { helpers } from "../helpers/index";
import ListMovies from "../component/ListMovies";
import PaginationMovies from "../component/Pagination";

const { RangePicker } = DatePicker;

// eslint-disable-next-line react-refresh/only-export-components
const UpcomingMovies = () => {
    const [loading, setLoading] = useState(false);
    const [dataMovies, setDataMovies] = useState([]);
    const [errors, setErrors] = useState(null);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const [totalResult, setTotalResult] = useState(0);
    const [sDate, setStartDate] = useState(null);
    const [eDate,setEndDate] = useState(null);

    const changeDate = async (date, dateString) => {
        setLoading(true);
        const [startDate, endDate] = dateString;
        setStartDate(startDate);
        setEndDate(endDate);
        const data = await api.UpCommingMovie(startDate, endDate, page);
        if(!helpers.isEmptyObject(data)){
            // co du lieu
            setDataMovies(data['results'])
            if(page === 1){
                setTotalPage(data['total_pages']);
                setTotalResult(data['total_results']);
            }
            setErrors(null);
        } else {
            // khong co du lieu
            setErrors({
                code: 404,
                mess: 'Not found data'
            })
        }
        setLoading(false);
    }

    const changePageMovies = (p) => {
        if( p >= 1 && p <= totalPage){
            // cap nhat lai state page
            // p : so trang ma nguoi dung bam o giao dien
            setPage(p);
            const stringDate = [sDate, eDate];
            changeDate(null, stringDate);
        }
    }

    if(loading){
        return (
            <LayoutMovies
                level1="Trang chu"
                level2="Danh sach"
                level3="Phim sap ra rap"
            >
                <Row>
                    <Col span={24}>
                        <Skeleton active />
                    </Col>
                </Row>
            </LayoutMovies>
        )
    }

    if(errors !== null){
        return (
            <LayoutMovies
                level1="Trang chu"
                level2="Danh sach"
                level3="Phim sap ra rap"
            >
                <Row>
                    <Col span={24}>
                        <h3>{errors.mess}</h3>
                    </Col>
                </Row>
            </LayoutMovies>
        )
    }

    return (
        <LayoutMovies
            level1="Trang chu"
            level2="Danh sach"
            level3="Phim sap ra rap"
        >
            <Row>
                <Col span={24}>
                    <h4> Phim sap trinh chieu</h4>
                    <Row>
                        <Col span={24}>
                            <RangePicker
                                defaultValue={moment()}
                                format={"YYYY-MM-DD"}
                                disabledDate={current => {
                                    return current && current < moment().endOf('day');
                                }}
                                onChange={(d, dt) => changeDate(d ,dt)}
                            />
                            <br/><br/>
                            <ListMovies
                                movies={dataMovies}
                                showDate={true}
                            />
                            {
                                dataMovies.length > 0 
                                &&
                                <PaginationMovies
                                    current={page}
                                    total={totalResult}
                                    changePage={changePageMovies}
                                />
                            }
                        </Col>
                    </Row>
                </Col>
            </Row>
        </LayoutMovies>
    )
}

export default React.memo(UpcomingMovies);