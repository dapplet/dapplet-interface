import { Jazzicon as Icon } from '@ukstv/jazzicon-react';

interface JazzBannerProps {
  // only string types with values of 'small' or 'medium' are allowed
  address: string;
  className?: string;
}

function JazzBanner({ address, className }: JazzBannerProps) {
  return (
    <div className={className}>
      <div className="jazzbanner-img">
        <Icon className="jazzbanner" address={address} />
      </div>
    </div>
  );
}

export default JazzBanner;
