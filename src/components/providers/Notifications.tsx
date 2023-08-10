import type { Notification } from '@usedapp/core';
import { shortenAddress, useEthers, useNotifications } from '@usedapp/core';
import { useEffect } from 'react';
import { notify } from '../../lib/actions';
import { etherscanUrl } from '../../lib/utils';

function Notifications() {
  const { notifications } = useNotifications();
  console.log('asdf notifications', notifications);

  const { account, chainId } = useEthers();

  function notificationSwitch(notification: Notification) {
    switch (notification.type) {
      case 'walletConnected':
        notify(
          `Connected to ${account && shortenAddress(account)}`,
          'primary',
          'wallet-fill'
        );
        break;
      case 'transactionPendingSignature':
        notify(`Transaction pending signature`, 'primary', 'info-circle');
        break;
      case 'transactionStarted':
        notify(
          `Transaction started`,
          'warning',
          'box-arrow-up-right',
          10000,
          `${chainId && etherscanUrl(chainId)}tx/${
            notification.transaction?.hash
          }`
        );
        break;
      case 'transactionSucceed':
        notify(
          `Transaction succeeded`,
          'success',
          'check-circle',
          10000,
          `${chainId && etherscanUrl(chainId)}tx/${
            notification.transaction?.hash
          }`
        );
        break;
      case 'transactionFailed':
        notify(`Transaction failed`, 'danger', 'exclamation-circle', 10000);
        break;
      default:
        break;
    }
  }

  // use useEffect to listen for new notifications and call the notify function
  useEffect(() => {
    if (notifications.length > 0) {
      const notification = notifications[notifications.length - 1];
      notificationSwitch(notification);
    }
  }, [notifications]);

  return <></>;
}

export default Notifications;
