'use strict';

var veilcore = module.exports;

// module information
veilcore.version = 'v' + require('./package.json').version;
veilcore.versionGuard = function (version) {
    if (version !== undefined) {
        var message = 'More than one instance of veilcore-lib found. ' +
            'Please make sure to require veilcore-lib and check that submodules do' +
            ' not also include their own veilcore-lib dependency.';
        throw new Error(message);
    }
};
veilcore.versionGuard(global._veilcore);
global._veilcore = veilcore.version;

// crypto
veilcore.crypto = {};
veilcore.crypto.BN = require('./lib/crypto/bn');
veilcore.crypto.ECDSA = require('./lib/crypto/ecdsa');
veilcore.crypto.Hash = require('./lib/crypto/hash');
veilcore.crypto.Random = require('./lib/crypto/random');
veilcore.crypto.Point = require('./lib/crypto/point');
veilcore.crypto.Signature = require('./lib/crypto/signature');

// encoding
veilcore.encoding = {};
veilcore.encoding.Base58 = require('./lib/encoding/base58');
veilcore.encoding.Base58Check = require('./lib/encoding/base58check');
veilcore.encoding.BufferReader = require('./lib/encoding/bufferreader');
veilcore.encoding.BufferWriter = require('./lib/encoding/bufferwriter');
veilcore.encoding.Varint = require('./lib/encoding/varint');

// utilities
veilcore.util = {};
veilcore.util.buffer = require('./lib/util/buffer');
veilcore.util.js = require('./lib/util/js');
veilcore.util.preconditions = require('./lib/util/preconditions');

// errors thrown by the library
veilcore.errors = require('./lib/errors');

// main bitcoin library
veilcore.Address = require('./lib/address');
veilcore.Block = require('./lib/block');
veilcore.MerkleBlock = require('./lib/block/merkleblock');
veilcore.BlockHeader = require('./lib/block/blockheader');
veilcore.HDPrivateKey = require('./lib/hdprivatekey.js');
veilcore.HDPublicKey = require('./lib/hdpublickey.js');
veilcore.Message = require('./lib/message');
veilcore.Networks = require('./lib/networks');
veilcore.Opcode = require('./lib/opcode');
veilcore.PrivateKey = require('./lib/privatekey');
veilcore.PublicKey = require('./lib/publickey');
veilcore.Script = require('./lib/script');
veilcore.Transaction = require('./lib/transaction');
veilcore.URI = require('./lib/uri');
veilcore.Unit = require('./lib/unit');

// dependencies, subject to change
veilcore.deps = {};
veilcore.deps.bnjs = require('bn.js');
veilcore.deps.bs58 = require('bs58');
veilcore.deps.Buffer = Buffer;
veilcore.deps.elliptic = require('elliptic');
veilcore.deps._ = require('lodash');

// Internal usage, exposed for testing/advanced tweaking
veilcore.Transaction.sighash = require('./lib/transaction/sighash');
