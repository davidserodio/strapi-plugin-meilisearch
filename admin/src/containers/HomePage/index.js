/*
 *
 * HomePage
 *
 */

import React, { memo } from 'react'
import PluginTabs from '../PluginTabs'
import PluginHeader from '../PluginHeader'
import { Redirect } from 'react-router-dom'
import usePermissions from '../../Hooks/usePermissions';

const HomePage = () => {
  const { canRead, loading } = usePermissions();

  if (loading) return null;

  if (!canRead) return <Redirect to="/" />;

  return (
    <div>
      <PluginHeader />
      <PluginTabs />
    </div>
  )
}

export default memo(HomePage)
