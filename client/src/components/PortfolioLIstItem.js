import React from 'react'
import { string } from 'prop-types'
import { Card, CardContent, CardMedia, CardActionArea } from '@material-ui/core'

const PortfolioListItem = ({ title, link_url, image_url }) => {
    return (
        <Card className="card-item">
            <CardActionArea
                component={"a"}
                href={link_url}
                target="_blank"
                rel="noopener noreferrer"
            >
                <CardMedia
                    image={image_url}
                    alt={title}
                    className="media-card"
                />
                <CardContent>
                    {title}
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

PortfolioListItem.propTypes = {
    title: string,
    link_url: string,
    image_url: string
}

export default PortfolioListItem