import styled from "@emotion/styled";
import { Typography } from "antd";
import * as qs from "qs";
import { useEffect, useState } from "react";
import { cleanObject, useMount, useDebounce } from "utils";
import { useHttp } from "utils/http";
import { useProjects } from "utils/project";
import { useAsync } from "utils/use-async";
import { useUsers } from "utils/user";
import { List, Project } from "./list";
import { SearchPanel } from "./search-panel";
const apiUrl = process.env.REACT_APP_API_URL

export const ProjectListScreen = () => {
    const [param, setParam] = useState({
        name: '',
        personId: ''
    })
    const debouncedParam = useDebounce(param, 200)
    // const [users, setUsers] = useState([])

    // const [list, setList] = useState([])
    const { isLoading, error, data:list} = useProjects(debouncedParam)
    const {data: users} = useUsers()
    return <Container>
        <h1>项目列表</h1>
        <SearchPanel users={users || []} param={param} setParam={setParam} />
        {error ? <Typography.Text type={"danger"}>{error.message}</Typography.Text> : null}
        <List loading={isLoading} users={users || []} dataSource={list || []} />
    </Container>
}

const Container = styled.div`
    padding: 3.2rem;
`