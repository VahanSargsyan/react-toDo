import React from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
});

function List(props) {
    let filter = 'active';

    const toDos = props.toDos[filter].reduce((list, toDo) => {
        list.push(
            <ExpansionPanelSummary key={toDo.key + 'h'} expandIcon={<ExpandMoreIcon />}>
                <Typography >{toDo.header}</Typography>
            </ExpansionPanelSummary>
        );
        list.push(
            <ExpansionPanelDetails key={toDo.key}>
                <Typography>
                    {toDo.text}
                    {/* <ControllButtons /> */}
                </Typography>
            </ExpansionPanelDetails>
        )
        return list;
    }, [])

    return <div><ExpansionPanel>{toDos}</ExpansionPanel></div>;
}

/* List.propTypes = {
    classes: PropTypes.object.isRequired,
}; */

export default withStyles(styles)(List);