import BlockChyp from './client'

if (typeof window !== 'undefined') {
  (window as any).blockchyp = BlockChyp;
}
