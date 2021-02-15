export type SettingsProps = {}

export const Settings: React.FC<SettingsProps> = (props) => {

  return (
    <div>
      <div className="row">
        settings
      </div>
      <div className="settings row">
        <input placeholder="blog title" />
        <input placeholder="suggested tags" />
        <input placeholder="private tags" />
      </div>
      {/* <div className="row">
        theme
      </div>
      <div className="row">
        <input placeholder="header" />
        <input placeholder="anchor" />
        <input placeholder="border" />
        <input placeholder="text" />
        <input placeholder="background" />
      </div> */}
    </div>);
}