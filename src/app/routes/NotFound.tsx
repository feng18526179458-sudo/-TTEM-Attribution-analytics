import { KsEmptyState, KsButton } from '@byted-keystone/react';
import { useNavigate } from 'react-router';
import imgIllustration from '../../imports/KsEmptyStates/c7d937c1505738034827a2de3aa5301b823ef14d.png';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-1 items-center justify-center p-6">
      <KsEmptyState
        className="-mt-20"
        title="Page not found"
        description="The page you are looking for doesn't exist or has been moved."
      >
        <img
          slot="illustration"
          src={imgIllustration}
          alt=""
          className="h-[280px] w-[400px] object-cover"
        />
        <div slot="footer" className="flex gap-2">
          <KsButton size="md" variant="default" onClick={() => navigate(-1)}>
            Go back
          </KsButton>
          <KsButton size="md" variant="primary" onClick={() => navigate('/')}>
            Go home
          </KsButton>
        </div>
      </KsEmptyState>
    </div>
  );
}
