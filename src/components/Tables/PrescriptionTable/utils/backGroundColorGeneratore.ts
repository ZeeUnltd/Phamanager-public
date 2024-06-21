import styles from '../tables.module.scss';

export const backGroundColorGenerator: any = (data: string) => {
    return (
        data === "Pending"
        ? styles.pending
        : data === "Quoted"
        ? styles.quoted
        : data === "Rejected"
        ? styles.quoted
        : data === "Dispensed"
        ? styles.dispensed
        : ""
    )
}