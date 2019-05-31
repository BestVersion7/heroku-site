import React from 'react'
import { string, array } from 'prop-types'
import { List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core'
import Check from '@material-ui/icons/Check'

const SkillListItem = ({ area, skills }) => {
    return (
        <section>
            <h3>{area}</h3>
            <List className="skill-container">
                {skills.map((item, index) => (
                    <ListItem key={index}>
                        <ListItemIcon><Check /></ListItemIcon>
                        <ListItemText primary={item} />
                    </ListItem>
                ))}
            </List>
        </section>
    )
}

SkillListItem.propTypes = {
    area: string.isRequired,
    skills: array.isRequired
}

export default SkillListItem