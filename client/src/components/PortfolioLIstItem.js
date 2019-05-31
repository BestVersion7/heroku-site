import React from 'react'
import { string } from 'prop-types'
import { Link, Avatar, Card, CardHeader, CardContent, CardMedia, CardActionArea } from '@material-ui/core'

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

export default PortfolioListItem