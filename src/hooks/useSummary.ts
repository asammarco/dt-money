import { useMemo } from 'react'
import { TransactionContext } from '../contexts/TransactionContexts'
import { useContextSelector } from 'use-context-selector'

export function useSummary() {
  const transactions = useContextSelector(TransactionContext, (context) => {
    return context.transactions
  })

  const summary = useMemo(() => {
    return transactions.reduce(
      (acc, transaction) => {
        if (transaction.type === 'income') {
          acc.income += transaction.price
        }
        if (transaction.type === 'outcome') {
          acc.outcome += transaction.price
        }

        acc.total = acc.income - acc.outcome

        return acc
      },
      {
        income: 0,
        outcome: 0,
        total: 0,
      },
    )
  }, [transactions])

  return summary
}
