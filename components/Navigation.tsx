import React from 'react'
import styles from '../styles/Navigation.module.scss'

type INav = {
	children: React.ReactNode
}

type INavItem = {
	children: string | JSX.Element
}

export const Navigation = ({children}: INav) => {
	return (
		<div className={styles.navigation}>
			{children}
		</div>
	)
}

export const NavigationItem= ({children}: INavItem) => {
	return (
		<div className={styles.navigation_item}>
			{children}
		</div>
	)
}