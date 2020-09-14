import React, { useState, useEffect } from 'react'
import i18n from '@dhis2/d2-i18n'
import { Menu, MenuItem, MenuSectionHeader } from '@dhis2/ui'
import { useDataQuery } from "@dhis2/app-runtime"
import TableContent from './TableContent'
import styles from './App.module.css'

const MyApp = () => {
    let programsData = useDataQuery(programs).data;
    let dataSetsData = useDataQuery(dataSets).data;
    const [data, setData] = useState(programsData);
    const [tableData, setTableData] = useState("");
    const [dataTestArg, setDataTestArg] = useState("list-program-");
    useEffect(() => {
        if(programsData) {
            setData(programsData.programs.programs);
        }
    },[programsData])

    useEffect(() => {
        if(programsData !== undefined){
            let newArg = data == programsData.programs.programs ? "list-program-" : "list-dataSet-";
            setDataTestArg(newArg);
        }
    },[data])
    return (
        <div className={styles.container}>
            <nav className={styles.menu} data-test-id="menu">
                <MenuSectionHeader label={i18n.t('Menu')} />
                <Menu>
                    <MenuItem
                        label={i18n.t('Programs')}
                        dataTest="menu-programs"
                        onClick={() => {setData(programsData.programs.programs)}}
                    />
                    <MenuItem
                        label={i18n.t('Data sets')}
                        dataTest="menu-dataSets"
                        onClick={() => {setData(dataSetsData.dataSets.dataSets)}}
                    />
                </Menu>
            </nav>
            <main className={styles.main}>
                <h1>List</h1>
                <nav>
                    <Menu>
                    {!data && <span>...</span>}
                    {data && data
                        .map(entry => (
                        <MenuItem 
                            label={i18n.t(entry.name)}
                            onClick={() => {setTableData(entry)}}
                            dataTest={dataTestArg + entry.id}
                        />
                    ))}
                    </Menu>
                </nav>
            </main>
            <content className={styles.content}>
                <h1>Details</h1>
                <TableContent items={tableData}/>
            </content>
        </div>
    )
}

export default MyApp


const programs = {
    programs:{
        resource: 'programs',
        params: {
            paging: false,
            fields: ['id', 'name', 'created'],
        }
    }
}

const dataSets = {
    dataSets:{
        resource: 'dataSets',
        params: {
            paging: false,
            fields: ['id', 'name', 'created'],
        }
    }
}