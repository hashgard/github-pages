(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{185:function(e,t,a){"use strict";a.r(t);var s=a(0),r=Object(s.a)({},(function(){var e=this.$createElement;this._self._c;return this._m(0)}),[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"验证人安全"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#验证人安全","aria-hidden":"true"}},[e._v("#")]),e._v(" 验证人安全")]),e._v(" "),a("p",[e._v("我们鼓励每一个验证人候选者独立运行其操作，因为不同的设置增加了网络的抵抗能力。\n为了能按时启动主网，验证人候选者现在就应该开始设置了。")]),e._v(" "),a("h2",{attrs:{id:"密钥管理-hsm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#密钥管理-hsm","aria-hidden":"true"}},[e._v("#")]),e._v(" 密钥管理 - HSM")]),e._v(" "),a("p",[e._v("让攻击者无法盗取验证人的密钥是至关重要的任务。如果可能发生盗取，这将会使委托给抵抗力脆弱的验证人的所有股权都处于风险之中。\n硬件安全模块是防范该风险的一个重要策略。")]),e._v(" "),a("p",[e._v("为了支持 Hashgard，HSM模块必须要支持"),a("code",[e._v("ed25519")]),e._v("签名。YubiHSM2支持了"),a("code",[e._v("ed25519")]),e._v("，我们期望在2017年12月时，能有一个可以使用的库。\nYubiHSM可以保护私钥但是不能确保它不会去重复签署一个区块。")]),e._v(" "),a("p",[e._v("Tendermint 团队也在为拓展 Ledger Nano S 应用以支持验证人签名做贡献。这个应用将会储存最近的区块，并能降低双重签名攻击的风险。")]),e._v(" "),a("p",[e._v("我们会在有更多关于密钥保存安全的可行的解决方案出现时更新这个文档。")]),e._v(" "),a("h2",{attrs:{id:"哨兵节点（ddos防御）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#哨兵节点（ddos防御）","aria-hidden":"true"}},[e._v("#")]),e._v(" 哨兵节点（DDOS防御）")]),e._v(" "),a("p",[e._v("验证人有责任确保网络能够经受住DDOS攻击。")]),e._v(" "),a("p",[e._v("降低这种风险的一个推荐方案是验证人要在成为哨兵节点的网络拓扑结构上去精心搭建他们的网络结构。")]),e._v(" "),a("p",[e._v("因为验证人节点可以操作自身，也可以被其熟知的其它验证人运行，验证人节点应该只连接到其所信任的全节点上。\n一个验证人节点通常会运行在一个数据中心。大部分数据中心提供对主流云服务提供商的直接网络连接服务。\n验证人可以去连接云服务中上的哨兵节点。验证人节点直接连接到其哨兵节点，减缓了DDOS攻击带来的压力，\n还可以添加多个新的哨兵节点用以轮换来减轻已存在哨兵节点所遭受到的攻击。")]),e._v(" "),a("p",[e._v("哨兵节点能够迅速轮换或者改变它们的IP地址。因为与哨兵节点的连接是在私有的IP网段，基于因特网的攻击不可能直接骚扰到验证人节点。\n这将确保验证人区块的提交和投票总是能广播至网络中的其余节点。")]),e._v(" "),a("p",[e._v("你可以按照下面的指令去设置你的哨兵节点架构：")]),e._v(" "),a("p",[e._v("验证人节点必须编辑它们的config.toml文件：")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Comma separated list of nodes to keep persistent connections to")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Do not add private peers to this list if you don't want them advertised")]),e._v("\npersistent_peers "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("list of sentry nodes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Set true to enable the peer-exchange reactor")]),e._v("\npex "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("false")]),e._v("\n")])])]),a("p",[e._v("哨兵节点应该编辑它们的config.toml文件:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Comma separated list of peer IDs to keep private (will not be gossiped to other peers)")]),e._v("\nprivate_peer_ids "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"ipaddress of validator nodes"')]),e._v("\n")])])]),a("h2",{attrs:{id:"环境变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境变量","aria-hidden":"true"}},[e._v("#")]),e._v(" 环境变量")]),e._v(" "),a("p",[e._v("默认情况下，具有以下前缀的大写环境变量将替换小写命令行标志：")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("GA")]),e._v("（对应Hashgard的标识）")]),e._v(" "),a("li",[a("code",[e._v("TM")]),e._v("（对应Tendermint的标识）")]),e._v(" "),a("li",[a("code",[e._v("BC")]),e._v("（对应democli或basecli的标识）")])]),e._v(" "),a("p",[e._v("例如，环境变量"),a("code",[e._v("GA_CHAIN_ID")]),e._v("将映射到命令行标识"),a("code",[e._v("--chain-id")]),e._v("。注意，虽然显式命令行标识优先于环境变量，但环境变量优先于任何配置文件。\n因此，必须锁定环境，以便在CLI上将任何关键参数定义为标识或防止修改任何环境变量。")])])}],!1,null,null,null);t.default=r.exports}}]);