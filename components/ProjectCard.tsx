import React from 'react'
import styles from '../styles/ProjectCard.module.scss'

type IPCard = {
	children: React.ReactNode
}

const ProjectCard = ({children}: IPCard) => {
	return (
		<div className={styles.project_card}>
			{children}
		</div>
	)
}

export default ProjectCard
