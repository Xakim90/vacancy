import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import { Breadcrumb } from 'antd'

const BreadCrumbs = () => {
    const location = useLocation();
    const breadCrumbView = () => {
        const { pathname } = location;
        const pathnames = pathname.split('/').filter((item) => item);

        return (
            <div>
                <Breadcrumb separator=">">
                    {pathnames.length > 0 ? (
                        <Breadcrumb.Item>
                            <Link to='/'>Home</Link>
                        </Breadcrumb.Item>
                    ) : (
                        <Breadcrumb.Item>
                            Home
                        </Breadcrumb.Item>
                    )}
                    {
                        pathnames.map((name, index) => {
                            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                            const isLast = index === pathnames.length - 1;
                            return isLast ? (
                                <Breadcrumb.Item key={name+index}>
                                    {name}
                                </Breadcrumb.Item>
                            ) : (
                                <Breadcrumb.Item>
                                    <Link to={`${routeTo}`}>{name}</Link>
                                </Breadcrumb.Item>
                            )
                        })
                    }
                </Breadcrumb>
            </div>
        )
    };

    return (
        <>{breadCrumbView()}</>
    )
}

export default BreadCrumbs